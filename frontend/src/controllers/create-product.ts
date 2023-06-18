import { CreateProdutInput } from "../repositories/products-repository";
import { makeCreateProductUseCase } from "../use-cases/factories/make-create-product-use-case";

export async function createProduct(data: CreateProdutInput) {
  const createProductUseCase = makeCreateProductUseCase();
  const product = await createProductUseCase.execute({
    name: data.name,
    price: data.price,
    status: data.status,
  });
  return product;
}
