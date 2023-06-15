import { PrismaInventoriesRepository } from "@/repositories/prisma/prisma-inventories-repository";
import { CreateInventoryUseCase } from "../create-inventory";

export function makeCreateInventoryUseCase() {
  const inventoriesRepository = new PrismaInventoriesRepository();
  const createInventoryUseCase = new CreateInventoryUseCase(
    inventoriesRepository
  );

  return createInventoryUseCase;
}
