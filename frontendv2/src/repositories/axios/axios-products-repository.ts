import {
  ProductsRepository,
  Product,
  CreateProdutInput,
} from "../products-repository";
import axios from "./axios";

export class AxiosProductsRepository implements ProductsRepository {
  async list(): Promise<Product[]> {
    const response = await axios.get("/products");
    const products = response.data.products;
    return products;
  }
  async create(data: CreateProdutInput): Promise<Product> {
    const response = await axios.post("/products", {
      name: data.name,
      price: data.price,
      status: data.status,
    });
    const product = response.data.product;
    return product;
  }
  async update(data: CreateProdutInput): Promise<Product> {
    const response = await axios.put("/products", {
      name: data.name,
      price: data.price,
      status: data.status,
    });
    const product = response.data.product;
    return product;
  }
  async delete(id: string) {
    await axios.delete("/products", {
      data: {
        id,
      },
    });
  }
}
