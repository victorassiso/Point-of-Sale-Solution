import { prisma } from "@/lib/prisma";
import { Category, Prisma } from "@prisma/client";
import { CategoriesRepository } from "../categories-repository";

export class PrismaCategoriesRepository implements CategoriesRepository {
  async create(name: string) {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    return category;
  }

  async list() {
    const categories = await prisma.category.findMany();
    return categories;
  }
}
