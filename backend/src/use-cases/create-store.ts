import { StoresRepository } from "@/repositories/stores-repository";

import { Inventory, Store } from "@prisma/client";
import { StoreAlreadyExistsError } from "./errors/store-already-exists";
import { makeListProductsUseCase } from "./factories/make-list-products-use-case";
import { makeCreateInventoryUseCase } from "./factories/make-create-inventory-use-case";

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

    // Create Store
    const store = await this.storesRepository.create({ name });

    // get all products
    const listProductsUseCase = makeListProductsUseCase();
    const { products } = await listProductsUseCase.execute();

    let product_id: string = "";
    let store_id: string = store.id;
    const balance: number = 0;
    let inventory: Inventory;
    let inventories: Inventory[] = [];

    // Instanciate createInventoryUseCase
    const createInventoryUseCase = makeCreateInventoryUseCase();

    // For each existing product
    for (let index = 0; index < products.length; index++) {
      // Create inventory with the recently created store id and balance = 0
      product_id = products[index].id;
      console.log(
        "store_id: ",
        store_id,
        "product_id: ",
        product_id,
        "balance: ",
        balance
      );
      await createInventoryUseCase.execute({ store_id, product_id, balance });
    }

    return { store };
  }
}
