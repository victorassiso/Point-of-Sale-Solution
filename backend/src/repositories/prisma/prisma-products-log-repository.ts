import { prisma } from "@/lib/prisma";
import { Prisma, ProductLog } from "@prisma/client";
import { ProductsLogRepository, ProductsLogCreateInput } from "../products-log-repository";

export class PrismaProductsLogRepository implements ProductsLogRepository {

  async create(data: ProductsLogCreateInput) {
    const productLog = await prisma.productLog.create({
      data,
    });

    return productLog;
  }

  async listByProduct(product_id: string) {
    const productsLog = await prisma.productLog.findMany({
      where:{
        product_id
      },
      orderBy: [
        {
          created_at: 'desc',
        }
      ],
    });

    return productsLog;
  }

}
