import { prisma } from "@/lib/prisma";
import { Category, Prisma } from "@prisma/client";
import {
  CategoriesRepository,
  CategoryUpdateInput,
} from "../categories-repository";

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

  async findByName(name: string) {
    const category = await prisma.category.findUnique({
      where: {
        name,
      },
    });
    return category;
  }

  async findById(id: string) {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  }

  async update(data: CategoryUpdateInput) {
    const category = await prisma.category.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });
    return category;
  }

  async delete(id: string) {
    console.log(id);
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
