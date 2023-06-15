import { Prisma, Inventory } from "@prisma/client";

export interface InventoryCreateAndUpdateInput {
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
  create(data: InventoryCreateAndUpdateInput): Promise<Inventory>;
  update(data: InventoryCreateAndUpdateInput): Promise<Inventory>;
  listAll(): Promise<Inventory[]>;
  listByStore(store_id: string): Promise<Inventory[]>;
  delete(id: string): Promise<void>;
}
