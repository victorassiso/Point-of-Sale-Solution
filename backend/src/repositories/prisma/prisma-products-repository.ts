import { prisma } from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";
import { ProductRepository, ProductUpdateInput } from "../products-repository";

export class PrismaProductRepository implements ProductRepository {
  async findByName(name: string) {
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
    });
    return product;
  }

  async findById(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
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

  async update(data: ProductUpdateInput): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        price: data.price,
      },
    });
    return product;
  }

  async list() {
    const products = await prisma.product.findMany();

    return products;
  }

  async delete(id: string) {
    console.log(id);
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
