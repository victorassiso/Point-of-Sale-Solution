import { InvoiceItem } from "@prisma/client";
import {
  InvoiceItemsRepository,
  InvoiceItemCreateInput,
} from "../invoice-items-repository";
import { prisma } from "@/lib/prisma";

export class PrismaInvoiceItemsRepository implements InvoiceItemsRepository {
  async create(data: InvoiceItemCreateInput) {
    const invoiceItem = await prisma.invoiceItem.create({
      data,
    });
    return invoiceItem;
  }

  async listByInvoice(invoice_id: string) {
    const invoiceItems = await prisma.invoiceItem.findMany({
      where: {
        invoice_id,
      },
    });
    return invoiceItems;
  }
}
