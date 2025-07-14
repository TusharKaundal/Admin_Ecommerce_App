import { categories } from "./constants";

export const getCardData = (products) => {
  const lowStockItemCount = products.filter((p) => p.stock < 5).length;
  const totalCategories = categories.length;
  return {
    lowStockItemCount,
    totalCategories,
    totalProduct: products.length,
  };
};

export const formatCurrency = (amount) => {
  return amount.toLocaleString("en-IN");
};
