import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    product: {
      id: string;
      name: string;
      price: number;
      created_at: string;
      session_id: string;
    };
  }
}
