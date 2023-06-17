import { PrismaInventoriesRepository } from "@/repositories/prisma/prisma-inventories-repository";
import { ListInventoriesUseCase } from "../list-inventories";

export function makeListInventoriesUseCase() {
  const inventoriesRepository = new PrismaInventoriesRepository();
  const listInventoriesUseCase = new ListInventoriesUseCase(
    inventoriesRepository
  );

  return listInventoriesUseCase;
}
