import { InventoriesRepository } from "@/repositories/inventories-repository";
import { Inventory } from "@prisma/client";

interface ListInventoriesResponse {
  inventories: Inventory[];
}

export class ListInventoriesUseCase {
  constructor(private inventoriesRepository: InventoriesRepository) {}

  async execute(): Promise<ListInventoriesResponse> {
    const inventories = await this.inventoriesRepository.list();
    return { inventories };
  }
}
