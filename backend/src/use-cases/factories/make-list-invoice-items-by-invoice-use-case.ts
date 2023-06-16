import { PrismaInvoiceItemsRepository } from "@/repositories/prisma/prisma-invoice-items-repository-use-case";
import { ListInvoiceItemsByInvoiceUseCase } from "../list-invoice-items-by-invoice";

export function makeListInvoiceItemsByInvoiceUseCase() {
  const invoiceItemsRepository = new PrismaInvoiceItemsRepository();
  const listinvoiceItemsByInvoiceUseCase = new ListInvoiceItemsByInvoiceUseCase(
    invoiceItemsRepository
  );

  return listinvoiceItemsByInvoiceUseCase;
}
