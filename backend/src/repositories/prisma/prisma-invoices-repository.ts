import { Invoice, Prisma } from "@prisma/client";
import {
  InvoiceCreateInput,
  InvoiceUpdateInput,
  InvoicesRepository,
} from "../invoices-repository";
import { prisma } from "@/lib/prisma";

export class PrismaInvoicesRepository implements InvoicesRepository {
  async create(data: InvoiceCreateInput) {
    const invoice = await prisma.invoice.create({
      data,
    });
    return invoice;
  }

  async listAll() {
    const invoices = await prisma.invoice.findMany();
    return invoices;
  }

  async delete(id: string) {
    await prisma.invoice.delete({
      where: {
        id,
      },
    });
  }

  async listByStore(store_id: string) {
    const invoices = await prisma.invoice.findMany({
      where: {
        store_id,
      },
    });
    return invoices;
  }

  async findById(id: string) {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id,
      },
    });
    return invoice;
  }

  async update(data: InvoiceUpdateInput): Promise<Invoice> {
    const invoice = await prisma.invoice.update({
      where: {
        id: data.id,
      },
      data: {
        total: data.total,
      },
    });

    return invoice;
  }
}
