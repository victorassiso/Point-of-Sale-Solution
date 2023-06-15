import { PrismaInventoriesRepository } from "@/repositories/prisma/prisma-inventories-repository";
import { ListInventoriesByStoreUseCase } from "../list-inventories-by-store";

export function makeListInventoriesByStoreUseCase() {
  const inventoriesRepository = new PrismaInventoriesRepository();
  const listInventoriesByStoreUseCase = new ListInventoriesByStoreUseCase(
    inventoriesRepository
  );

  return listInventoriesByStoreUseCase;
}
