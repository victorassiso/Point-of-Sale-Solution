import { CreateProductInput } from "../repositories/products-repository";
import { makeCreateProductUseCase } from "../use-cases/factories/make-create-product-use-case";

export async function createProduct(data: CreateProductInput) {
  console.log("createProduct...");
  console.log(data);
  const createProductUseCase = makeCreateProductUseCase();
  const product = await createProductUseCase.execute({
    name: data.name,
    price: data.price,
    status: data.status,
  });
  console.log(product);
  return product;
}
