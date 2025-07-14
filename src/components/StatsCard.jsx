import React from "react";
import { getCardData } from "../utils/helper";
import Card from "../ui/Cards";
import { useProductContext } from "../contextApi/ProductContext";
import { useCart } from "../contextApi/CartContext";

const StatsCard = () => {
  const { products } = useProductContext();
  const { lowStockItemCount, totalCategories, totalProduct } =
    getCardData(products);
  const { getTotal: totalRevenue } = useCart();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 my-6">
      <Card
        title="Total Products"
        value={totalProduct}
        iconType="totalProduct"
      />
      <Card title="Total Revenue" value={totalRevenue} iconType="revenue" />
      <Card
        title="Low Stock Items"
        value={lowStockItemCount}
        iconType="stock"
      />
      <Card title="Categories" value={totalCategories} iconType="category" />
    </div>
  );
};

export default StatsCard;
