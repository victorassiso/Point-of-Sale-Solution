export enum ProductStatus {
  active,
  inactive,
}

export interface CreateProdutInput {
  name: string;
  price: number;
  status: ProductStatus;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
}

export interface ProductsRepository {
  list(): Promise<Product[]>;
  create(data: CreateProdutInput): Promise<Product>;
  update(data: CreateProdutInput): Promise<Product>;
  delete(id: string): void;
}
