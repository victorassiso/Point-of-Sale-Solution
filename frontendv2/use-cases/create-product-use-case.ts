// import { Product, ProductStatus, ProductsRepository } from "../src/repositories/products-repository";

// interface CreateProductUseCaseRequest {
//   name: string;
//   price: number;
//   status: ProductStatus
// }

// interface CreateProductUseCaseResponse {
//   product: Product;
// }
// export class CreateProductUseCase {
//   constructor(private productsRepository: ProductsRepository) {}

//   async execute({
//     name,
//     price,
//   }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {

//     // const product = await this.productsRepository.create({name, price, });

//     // // Get all stores
//     // const listStoresUseCase = makeListStoresUseCase();
//     // const { stores } = await listStoresUseCase.execute();

//     // // Instanciante createInventoryUseCase
//     // const createInventoryUseCase = makeCreateInventoryUseCase();
//     // let store_id: string = "";
//     // const balance = 0;
//     // const product_id = product.id;

//     // // For each store
//     // for (let index = 0; index < stores.length; index++) {
//     //   store_id = stores[index].id;
//     //   // Create an inventory associating the store with the recently created product
//     //   createInventoryUseCase.execute({ store_id, product_id, balance });
//     // }

//     // // Create product log
//     // const createProductLogUseCase = makeCreateProductsLogUseCase();
//     // let status = product.status;
//     // createProductLogUseCase.execute({
//     //   name,
//     //   price,
//     //   product_id,
//     //   status,
//     // });
//     return { product };
//   }
// }
