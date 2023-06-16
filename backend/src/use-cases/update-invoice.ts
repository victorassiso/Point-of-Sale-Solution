import { InvoicesRepository } from "@/repositories/invoices-repository";
import { Invoice } from "@prisma/client";
import { InvoiceNotFoundError } from "./errors/invoice-not-found";

interface UpdateInvoiceUseCaseRequest {
  id: string;
  total: number;
}

interface UpdateInvoiceUserCaseResponse {
  invoice: Invoice;
}

export class UpdateInvoiceUseCase {
  constructor(private invoicesRepository: InvoicesRepository) {}

  async execute({
    id,
    total,
  }: UpdateInvoiceUseCaseRequest): Promise<UpdateInvoiceUserCaseResponse> {
    const invoiceWithSameId = await this.invoicesRepository.findById(id);
    if (!invoiceWithSameId) {
      throw new InvoiceNotFoundError();
    }

    const invoice = await this.invoicesRepository.update({ id, total });

    return { invoice };
  }
}
