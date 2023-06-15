import { PrismaStoresRepository } from "@/repositories/prisma/prisma-stores-repository";
import { CreateStoreUseCase } from "../create-store";

export function makeCreateStoreUseCase() {
  const storeRepository = new PrismaStoresRepository();
  const createStoreUseCase = new CreateStoreUseCase(storeRepository);

  return createStoreUseCase;
}
