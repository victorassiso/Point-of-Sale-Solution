import React from "react";
import "./Products.css";
import ProductsTable from "./ProductsTable";

export default function Products() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Products</h1>
          <h4>Lista com todos os produtos</h4>
        </div>
        <div className="buttons">
          <button>+ Cadastrar</button>
        </div>
      </div>
      <div className="table">
        <ProductsTable />
      </div>
    </div>
  );
}
