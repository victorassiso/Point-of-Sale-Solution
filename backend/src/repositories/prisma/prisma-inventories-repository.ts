import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import {
  InventoryFindInput,
  InventoryCreateAndUpdateInput,
  InventoriesRepository,
} from "../inventories-repository";

export class PrismaInventoriesRepository implements InventoriesRepository {
  async find(data: InventoryFindInput) {
    const inventory = await prisma.inventory.findFirst({
      where: {
        product_id: data.product_id,
        store_id: data.store_id,
      },
    });

    return inventory;
  }
  async create(data: InventoryCreateAndUpdateInput) {
    const inventory = await prisma.inventory.create({
      data,
    });

    return inventory;
  }
  async update(data: InventoryCreateAndUpdateInput) {
    const inventory = await prisma.inventory.update({
      where: {
        store_id_product_id: {
          product_id: data.product_id,
          store_id: data.store_id,
        },
      },
      data: {
        balance: data.balance,
      },
    });
    return inventory;
  }
  async list() {
    const inventory = await prisma.inventory.findMany();

    return inventory;
  }
  async listByStore(store_id: string) {
    const inventory = await prisma.inventory.findMany({
      where: {
        store_id,
      },
    });

    return inventory;
  }
  async delete(product_id: string) {
    await prisma.inventory.deleteMany({
      where: {
        product_id,
      },
    });
  }
}
