import { PrismaStoresRepository } from "@/repositories/prisma/prisma-stores-repository";
import { ListStoresUseCase } from "../list-stores";

export function makeListStoresUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const listStoresUseCase = new ListStoresUseCase(storesRepository);

  return listStoresUseCase;
}
