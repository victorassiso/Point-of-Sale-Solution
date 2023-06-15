import { InventoriesRepository } from "@/repositories/inventories-repository";
import { Inventory } from "@prisma/client";

interface CreateInventoryUseCaseRequest {
  store_id: string;
  product_id: string;
  balance: number;
}

interface CreateInventoryUseCaseResponse {
  inventory: Inventory;
}
export class CreateInventoryUseCase {
  constructor(private inventoriesRepository: InventoriesRepository) {}

  async execute({
    store_id,
    product_id,
    balance,
  }: CreateInventoryUseCaseRequest): Promise<CreateInventoryUseCaseResponse> {
    const inventory = await this.inventoriesRepository.create({
      store_id,
      product_id,
      balance,
    });

    return { inventory };
  }
}
