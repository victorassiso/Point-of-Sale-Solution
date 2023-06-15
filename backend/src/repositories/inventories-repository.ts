import { Prisma, Inventory } from "@prisma/client";

export interface InventoryUpdateInput {
  store_id: string;
  product_id: string;
  balance: number;
}

export interface InventoryFindInput {
  store_id: string;
  product_id: string;
}

export interface InventoriesRepository {
  find(data: InventoryFindInput): Promise<Inventory | null>;
  create(data: Prisma.InventoryCreateInput): Promise<Inventory>;
  update(data: InventoryUpdateInput): Promise<Inventory>;
  listAll(): Promise<Inventory[]>;
  listByStore(store_id: string): Promise<Inventory[]>;
  delete(id: string): Promise<void>;
}
