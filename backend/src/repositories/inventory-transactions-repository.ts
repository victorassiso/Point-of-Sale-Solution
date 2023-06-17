import { InventoryTransaction, Prisma } from "@prisma/client";

export interface InventoryTransactionsRepository {
  create(
    data: Prisma.InventoryTransactionCreateInput
  ): Promise<InventoryTransaction>;
  list(): Promise<InventoryTransaction[]>;
  listByStore(): Promise<InventoryTransaction[]>;
}
