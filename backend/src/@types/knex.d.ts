import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    product: {
      id: string;
      name: string;
      status: enum;
      price: number;
    };
    store: {
      id: string;
      name: string;
    };
    storage: {
      id: string;
      store_id: string;
      product_id: string;
      balance: number;
    };
    sale: {
      id: string;
      created_at: string;
      storage_id: string;
      total: number;
    };
    saleItem: {
      id: string;
      product_id: string;
      sale_id: string;
      amount: number;
      price: number;
    };
  }
}
