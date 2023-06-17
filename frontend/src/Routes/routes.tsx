import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Checkout } from "./Checkout.tsx";
import { Products } from "./Products.tsx";
import { Inventories } from "./Inventories.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Checkout />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/inventories",
    element: <Inventories />,
  },
]);
