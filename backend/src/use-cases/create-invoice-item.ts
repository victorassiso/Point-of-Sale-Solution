import { InvoiceItemsRepository } from "@/repositories/invoice-items-repository";
import { InvoiceItem } from "@prisma/client";

interface CreateInvoiceItemUseCaseRequest {
  invoice_id: string;
  product_id: string;
  amount: number;
  price: number;
}

interface CreateInvoiceItemUseCaseResponse {
  invoiceItem: InvoiceItem;
}

export class CreateInvoiceItemUseCase {
  constructor(private invoiceItemsRepository: InvoiceItemsRepository) {}

  async execute({
    product_id,
    invoice_id,
    amount,
    price,
  }: CreateInvoiceItemUseCaseRequest): Promise<CreateInvoiceItemUseCaseResponse> {
    const invoiceItem = await this.invoiceItemsRepository.create({
      product_id,
      invoice_id,
      amount,
      price,
    });

    return { invoiceItem };
  }
}
