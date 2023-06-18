enum ProductStatus {
  active,
  inactive,
}

export interface CreateProductInput {
  name: string;
  price: number;
  status?: ProductStatus;
}

export interface UpdateProductInput {
  id: string;
  name?: string;
  price?: number;
  status?: ProductStatus;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  status: string;
}

export interface ProductsRepository {
  create(data: CreateProductInput): Promise<Product>;
  list(): Promise<Product[]>;
  update(data: UpdateProductInput): Promise<Product>;
  delete(id: string): Promise<void>;
}
