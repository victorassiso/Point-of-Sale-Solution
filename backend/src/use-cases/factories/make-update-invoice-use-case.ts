import { PrismaInvoicesRepository } from "@/repositories/prisma/prisma-invoices-repository";
import { UpdateInvoiceUseCase } from "../update-invoice";

export function makeUpdateInvoiceUseCase() {
  const invoicesRepository = new PrismaInvoicesRepository();
  const updateInvoiceUseCase = new UpdateInvoiceUseCase(invoicesRepository);

  return updateInvoiceUseCase;
}
