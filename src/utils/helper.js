import { categories, productGenerateCounts } from "./constants";

export const getCardData = (products) => {
  const lowStockItemCount = products.filter((p) => p.stock < 5).length;
  const totalCategories = categories.length;
  return {
    lowStockItemCount,
    totalCategories,
    totalProduct: productGenerateCounts,
  };
};

export const formatCurrency = (amount) => {
  return amount.toLocaleString("en-IN");
};
