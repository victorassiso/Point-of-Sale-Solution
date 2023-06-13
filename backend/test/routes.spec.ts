import { expect, it, beforeAll, afterAll, describe, beforeEach } from "vitest";
import { execSync } from "node:child_process";
import { app } from "../src/app";
import request from "supertest";

describe("Routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.ready();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  describe("Products routes", () => {
    it("should be able to create a new product", async () => {
      await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);
    });

    it("should be able to list all products", async () => {
      await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);

      const listProductsResponse = await request(app.server)
        .get("/products")
        .expect(200);

      expect(listProductsResponse.body.products).toEqual([
        expect.objectContaining({
          name: "p1",
          status: "active",
          price: 1000,
        }),
      ]);
    });

    it("should be able to get a specific product", async () => {
      const createProductResponse = await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);

      const listProductsResponse = await request(app.server)
        .get("/products")
        .expect(200);

      const productId = listProductsResponse.body.products[0].id;

      const getSpecificProductResponse = await request(app.server)
        .get(`/products/${productId}`)
        .expect(200);

      expect(getSpecificProductResponse.body.product).toEqual(
        expect.objectContaining({
          id: productId,
          name: "p1",
          status: "active",
          price: 1000,
        })
      );
    });
  });

  /////////////////////////////////////////////////////////

  describe("Stores routes", () => {
    it("should be able to create a new store", async () => {
      await request(app.server)
        .post("/stores")
        .send({
          name: "s1",
        })
        .expect(201);
    });

    it("should be able to list all stores", async () => {
      await request(app.server)
        .post("/stores")
        .send({
          name: "p1",
        })
        .expect(201);

      const listStoresResponse = await request(app.server)
        .get("/stores")
        .expect(200);

      expect(listStoresResponse.body.stores).toEqual([
        expect.objectContaining({
          name: "p1",
        }),
      ]);
    });

    it("should be able to get a specific store", async () => {
      await request(app.server)
        .post("/stores")
        .send({
          name: "p1",
        })
        .expect(201);

      const listStoresResponse = await request(app.server)
        .get("/stores")
        .expect(200);

      const storeId = listStoresResponse.body.stores[0].id;

      const getSpecificStoreResponse = await request(app.server)
        .get(`/stores/${storeId}`)
        .expect(200);
      const obj = {
        id: storeId,
        name: "p1",
      };

      expect(getSpecificStoreResponse.body.store).toEqual(
        expect.objectContaining({
          id: storeId,
          name: "p1",
        })
      );
    });
  });

  /////////////////////////////////////////////////////////

  describe("Storages routes", () => {
    it("should be able to create a new storage", async () => {
      // Get Product Id
      const CreateProductResponse = await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);

      const listProductsResponse = await request(app.server)
        .get("/products")
        .expect(200);

      const productId = listProductsResponse.body.products[0].id;

      // Get Store Id
      const CreateStoreResponse = await request(app.server)
        .post("/stores")
        .send({
          name: "s1",
        })
        .expect(201);

      const listStoresResponse = await request(app.server)
        .get("/stores")
        .expect(200);

      const storeId = listStoresResponse.body.stores[0].id;

      // Get Storage
      const CreateStorageResponse = await request(app.server)
        .post("/storages")
        .send({
          store_id: storeId,
          product_id: productId,
          balance: 10,
        })
        .expect(201);
    });

    it("should be able to list all stores", async () => {
      // Get Product Id
      const CreateProductResponse = await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);

      const listProductsResponse = await request(app.server)
        .get("/products")
        .expect(200);

      const productId = listProductsResponse.body.products[0].id;

      // Get Store Id
      const CreateStoreResponse = await request(app.server)
        .post("/stores")
        .send({
          name: "s1",
        })
        .expect(201);

      const listStoresResponse = await request(app.server)
        .get("/stores")
        .expect(200);

      const storeId = listStoresResponse.body.stores[0].id;

      // Get Storage
      const CreateStorageResponse = await request(app.server)
        .post("/storages")
        .send({
          store_id: storeId,
          product_id: productId,
          balance: 10,
        })
        .expect(201);

      const listStoragesResponse = await request(app.server)
        .get("/storages")
        .expect(200);

      const storageId = listStoragesResponse.body.storages[0].id;

      expect(listStoragesResponse.body.storages).toEqual([
        expect.objectContaining({
          id: storageId,
          store_id: storeId,
          product_id: productId,
          balance: 10,
        }),
      ]);
    });

    it("should be able to get a specific storage", async () => {
      // Get Product Id
      const CreateProductResponse = await request(app.server)
        .post("/products")
        .send({
          name: "p1",
          status: "active",
          price: 1000,
        })
        .expect(201);

      const listProductsResponse = await request(app.server)
        .get("/products")
        .expect(200);

      const productId = listProductsResponse.body.products[0].id;

      // Get Store Id
      const CreateStoreResponse = await request(app.server)
        .post("/stores")
        .send({
          name: "s1",
        })
        .expect(201);

      const listStoresResponse = await request(app.server)
        .get("/stores")
        .expect(200);

      const storeId = listStoresResponse.body.stores[0].id;

      // Get Storage
      const CreateStorageResponse = await request(app.server)
        .post("/storages")
        .send({
          store_id: storeId,
          product_id: productId,
          balance: 10,
        })
        .expect(201);

      const listStoragesResponse = await request(app.server)
        .get("/storages")
        .expect(200);

      const storageId = listStoragesResponse.body.storages[0].id;

      const getSpecificStorageResponse = await request(app.server)
        .get(`/storages/${storageId}`)
        .expect(200);

      expect(getSpecificStorageResponse.body.storage).toEqual(
        expect.objectContaining({
          id: storageId,
          store_id: storeId,
          product_id: productId,
          balance: 10,
        })
      );
    });
  });
});
