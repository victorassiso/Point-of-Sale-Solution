import { prisma } from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";
import { ProductRepository } from "../products-repository";

export class PrismaProductRepository implements ProductRepository {
  async findByName(name: string) {
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
    });
    return product;
  }

  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data,
    });

    return product;
  }

  async update(data: Prisma.ProductCreateInput): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  async list() {
    const products = await prisma.product.findMany();

    return products;
  }
}
