import { AxiosProductsRepository } from "../../repositories/axios/axios-products-repository";
import { CreateProductUseCase } from "../create-product-use-case";

export function makeCreateProductUseCase() {
  const productsRepository = new AxiosProductsRepository();
  const createProductUseCase = new CreateProductUseCase(productsRepository);

  return createProductUseCase;
}
