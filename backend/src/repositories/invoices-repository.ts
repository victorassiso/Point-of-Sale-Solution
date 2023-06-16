import { Invoice } from "@prisma/client";

export interface InvoiceCreateInput {
  store_id: string;
}

export interface InvoiceUpdateInput {
  id: string;
  total: number;
}

export interface InvoicesRepository {
  create(data: InvoiceCreateInput): Promise<Invoice>;
  findById(id: string): Promise<Invoice | null>;
  listAll(): Promise<Invoice[]>;
  delete(id: string): Promise<void>;
  listByStore(store_id: string): Promise<Invoice[]>;
  update(data: InvoiceUpdateInput): Promise<Invoice>;
}
