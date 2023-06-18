import { AxiosProductsRepository } from "../../repositories/axios/axios-products-repository";
import { ListProductsUseCase } from "../list-products-use-case";

export function makeListProductsUseCase() {
  const productsRepository = new AxiosProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(productsRepository);

  return listProductsUseCase;
}
