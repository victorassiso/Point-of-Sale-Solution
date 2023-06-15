import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { StoresRepository, StoresUpdateInput } from "../stores-repository";

export class PrismaStoresRepository implements StoresRepository {
  async findByName(name: string) {
    const store = await prisma.store.findUnique({
      where: {
        name,
      },
    });
    return store;
  }

  async findById(id: string) {
    const store = await prisma.store.findUnique({
      where: {
        id,
      },
    });
    return store;
  }

  async create(data: Prisma.StoreCreateInput) {
    const store = await prisma.store.create({
      data,
    });
    return store;
  }

  async update(data: StoresUpdateInput) {
    const store = await prisma.store.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });
    return store;
  }

  async list() {
    const stores = await prisma.store.findMany();
    return stores;
  }

  async delete(id: string) {
    await prisma.store.delete({
      where: {
        id: id,
      },
    });
  }
}
