import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    product: {
      id: string;
      name: string;
      status: enum;
      price: number;
    };
  }
}
