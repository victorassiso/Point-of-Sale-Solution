import { makeListProductsUseCase } from "../use-cases/factories/make-list-products-use-case";

export async function listProducts() {
  const listProductUseCase = makeListProductsUseCase();
  const products = await listProductUseCase.execute();
  return products;
}
