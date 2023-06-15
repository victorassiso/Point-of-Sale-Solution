import { Prisma, Store } from "@prisma/client";

export interface StoresUpdateInput {
  id: string;
  name: string;
}

export interface StoresRepository {
  findByName(name: string): Promise<Store | null>;
  findById(id: string): Promise<Store | null>;
  create(data: Prisma.StoreCreateInput): Promise<Store>;
  update(data: StoresUpdateInput): Promise<Store>;
  list(): Promise<Store[]>;
  delete(id: string): Promise<void>;
}
