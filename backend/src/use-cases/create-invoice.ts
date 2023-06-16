import { InvoicesRepository } from "@/repositories/invoices-repository";
import { makeCreateInvoiceItemUseCase } from "./factories/make-create-invoice-item-use-case";
import { makeGetProductsUseCase } from "./factories/make-get-product-use-case";
import { Invoice, InvoiceItem } from "@prisma/client";
import { makeUpdateInvoiceUseCase } from "./factories/make-update-invoice-use-case";
import { ProductNotFoundError } from "./errors/product-not-found";

interface productAndAmount {
  product_id: string;
  amount: number;
}

interface CreateInvoiceUseCaseRequest {
  store_id: string;
  items: productAndAmount[];
}

interface CreateInvoiceUseCaseResponse {
  invoice: Invoice;
  invoiceItems: InvoiceItem[];
}

export class CreateInvoiceUseCase {
  constructor(private invoicesRepository: InvoicesRepository) {}

  async execute({
    store_id,
    items,
  }: CreateInvoiceUseCaseRequest): Promise<CreateInvoiceUseCaseResponse> {
    // Create Invoice
    const invoice = await this.invoicesRepository.create({ store_id });

    const createInvoiceItemUseCase = makeCreateInvoiceItemUseCase();
    const getProductUseCase = makeGetProductsUseCase();
    const updateInvoiceUseCase = makeUpdateInvoiceUseCase();
    const invoice_id = invoice.id;
    let total: number = 0;
    let invoiceItems: InvoiceItem[] = [];

    console.log(items);
    // For each item
    for (let index = 0; index < items.length; index++) {
      // Prepare variables
      const product_id = items[index].product_id;
      const amount = items[index].amount;

      // Get product By id
      const { product } = await getProductUseCase.execute({ id: product_id });
      if (!product) {
        throw new ProductNotFoundError();
      }
      console.log("Product:", product);

      // Get product price
      const price = product.price;
      console.log("Price: ", price);

      // Increment total
      total += price;
      console.log("Total: ", invoice.total);

      // Create an Invoice Item
      const { invoiceItem } = await createInvoiceItemUseCase.execute({
        invoice_id,
        product_id,
        amount,
        price,
      });
      console.log("invoiceItem: ", invoiceItem);

      // Push
      invoiceItems.push(invoiceItem);
      console.log("invoiceItems: ", invoiceItems);
    }

    // Update Invoice total
    const _invoice = await updateInvoiceUseCase.execute({
      id: invoice.id,
      total,
    });
    const updatedInvoice = _invoice.invoice;
    console.log("FINAL INVOICE TOTAL:", updatedInvoice.total);

    // Build response
    const response = {
      invoice: updatedInvoice,
      invoiceItems,
    };
    console.log("response: ", response);

    return response;
  }
}
