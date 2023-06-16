import { InvoiceItem } from "@prisma/client";

export interface InvoiceItemCreateInput {
  product_id: string;
  invoice_id: string;
  amount: number;
  price: number;
}

export interface InvoiceItemsRepository {
  create(data: InvoiceItemCreateInput): Promise<InvoiceItem>;
  listByInvoice(invoice_id: string): Promise<InvoiceItem[]>;
}
