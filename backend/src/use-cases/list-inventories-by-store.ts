import { InventoriesRepository } from "@/repositories/inventories-repository";
import { Inventory } from "@prisma/client";

interface ListInventoriesByStoreRequest {
  store_id: string;
}

interface ListInventoriesByStoreResponse {
  inventories: Inventory[];
}

export class ListInventoriesByStoreUseCase {
  constructor(private inventoriesRepository: InventoriesRepository) {}

  async execute({
    store_id,
  }: ListInventoriesByStoreRequest): Promise<ListInventoriesByStoreResponse> {
    const inventories = await this.inventoriesRepository.listByStore(store_id);
    return { inventories };
  }
}
