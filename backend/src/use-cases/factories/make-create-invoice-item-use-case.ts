import { PrismaInvoiceItemsRepository } from "@/repositories/prisma/prisma-invoice-items-repository-use-case";
import { CreateInvoiceItemUseCase } from "../create-invoice-item";

export function makeCreateInvoiceItemUseCase() {
  const invoiceItemsRepository = new PrismaInvoiceItemsRepository();
  const createInvoiceItemUseCase = new CreateInvoiceItemUseCase(
    invoiceItemsRepository
  );

  return createInvoiceItemUseCase;
}
