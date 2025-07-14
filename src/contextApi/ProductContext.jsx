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
  const [searchText, setSearchText] = useState("");
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

  const updateSearchText = useCallback((text) => {
    setSearchText(text);
  }, []);

  const contextValue = useMemo(() => {
    return {
      products,
      searchText,
      setProducts: updateProducts,
      setText: updateSearchText,
    };
  }, [products, updateProducts, updateSearchText, searchText]);
  console.log(searchText);
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
