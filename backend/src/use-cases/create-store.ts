import { StoresRepository } from "@/repositories/stores-repository";
import { Store } from "@prisma/client";
import { StoreAlreadyExistsError } from "./errors/store-already-exists";

interface CreateStoreUseCaseRequest {
  name: string;
}

interface CreateStoreUseCaseResponse {
  store: Store;
}

export class CreateStoreUseCase {
  constructor(private storesRepository: StoresRepository) {}

  async execute({
    name,
  }: CreateStoreUseCaseRequest): Promise<CreateStoreUseCaseResponse> {
    const storeWithSameName = await this.storesRepository.findByName(name);

    if (storeWithSameName) {
      throw new StoreAlreadyExistsError();
    }

    const store = await this.storesRepository.create({ name });

    return { store };
  }
}
