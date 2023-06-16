import { PrismaInvoicesRepository } from "@/repositories/prisma/prisma-invoices-repository";
import { CreateInvoiceUseCase } from "../create-invoice";

export function makeCreateInvoiceUseCase() {
  const invoicesRepository = new PrismaInvoicesRepository();
  const createInvoiceUseCase = new CreateInvoiceUseCase(invoicesRepository);

  return createInvoiceUseCase;
}
