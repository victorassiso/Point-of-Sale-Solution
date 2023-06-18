import {
  Product,
  ProductStatus,
  ProductsRepository,
} from "../repositories/products-repository";

interface CreateProductUseCaseRequest {
  name: string;
  price: number;
  status?: ProductStatus;
}

interface CreateProductUseCaseResponse {
  product: Product;
}
export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    price,
    status,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    console.log("CreateProductUseCase...");
    console.log({ name, price, status });
    const product = await this.productsRepository.create({
      name,
      price,
      status,
    });
    console.log(product);
    return { product };
  }
}
