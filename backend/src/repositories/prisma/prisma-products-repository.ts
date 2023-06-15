import { prisma } from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";
import { ProductRepository, ProductUpdateInput } from "../products-repository";
import { error } from "console";
import { PrismaUsersRepository } from "./prisma-users-repository";

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
    // console.log("prisma-products-repository.ts");
    // console.log(data);
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
}
