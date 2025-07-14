import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./contextApi/ProductContext.jsx";
import { CartProvider } from "./contextApi/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
);
