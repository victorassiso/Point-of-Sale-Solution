import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsLogRepository, ProductsLogCreateInput } from "../products-log-repository";

export class PrismaProductsLogRepository implements ProductsLogRepository {
  async create(data: ProductsLogCreateInput) {
    const product = await prisma.productLog.create({
      data,
    });

    return product;
  }

  // async list() {
  //   const products = await prisma.product.findMany();

  //   return products;
  // }

}
