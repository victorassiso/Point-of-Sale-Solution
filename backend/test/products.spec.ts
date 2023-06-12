import { expect, it, beforeAll, afterAll, describe, beforeEach } from "vitest";
import { execSync } from "node:child_process";
import { app } from "../src/app";
import request from "supertest";
import { randomUUID } from "crypto";
import { string } from "zod";

describe("Products routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.ready();
  });

  beforeEach(async () => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  it("should be able to create a new product", async () => {
    await request(app.server)
      .post("/products")
      .send({
        name: randomUUID(),
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
