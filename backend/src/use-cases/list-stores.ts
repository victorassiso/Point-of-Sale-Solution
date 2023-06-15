import { StoresRepository } from "@/repositories/stores-repository";
import { Store } from "@prisma/client";

interface ListStoresResponse {
  stores: Store[];
}

export class ListStoresUseCase {
  constructor(private storesRepository: StoresRepository) {}

  async execute(): Promise<ListStoresResponse> {
    const stores = await this.storesRepository.list();
    return { stores };
  }
}
