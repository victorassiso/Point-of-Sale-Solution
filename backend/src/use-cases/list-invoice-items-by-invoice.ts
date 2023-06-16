import { InvoiceItemsRepository } from "@/repositories/invoice-items-repository";
import { InvoiceItem } from "@prisma/client";

interface ListInvoiceItemsByInvoiceUseCaseRequest {
  invoice_id: string;
}

interface ListInvoiceItemsByInvoiceUseCaseResponse {
  invoiceItems: InvoiceItem[];
}

export class ListInvoiceItemsByInvoiceUseCase {
  constructor(private invoiceItemsRepository: InvoiceItemsRepository) {}

  async execute({ invoice_id }: ListInvoiceItemsByInvoiceUseCaseRequest) {
    const invoiceItems = await this.invoiceItemsRepository.listByInvoice(
      invoice_id
    );
    return { invoiceItems };
  }
}
