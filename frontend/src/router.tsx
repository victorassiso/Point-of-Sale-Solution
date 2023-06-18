import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Inventories from "./pages/Inventories/Inventories";

export const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/inventories",
    element: <Inventories />,
  },
]);
