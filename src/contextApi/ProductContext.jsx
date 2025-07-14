/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useCallback,
  useEffect,
  useContext,
  useMemo,
  useState,
} from "react";
import { generateMockProducts } from "../utils/dataGenerator";
import { productGenerateCounts } from "../utils/constants";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const data = await generateMockProducts(productGenerateCounts);
      setProducts(data);
    }
    getProducts();
  }, []);

  const updateProducts = useCallback((newProducts) => {
    setProducts(newProducts);
  }, []);

  const contextValue = useMemo(() => {
    return {
      products,
      setProducts: updateProducts, 
    };
  }, [products, updateProducts]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
