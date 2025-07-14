import React from "react";
import categoryIcon from "../assets/category.svg";
import productIcon from "../assets/package.svg";
import cashIcon from "../assets/cash.svg";
import stockIcon from "../assets/stock.svg";

const icons = {
  totalProduct: productIcon,
  revenue: cashIcon,
  stock: stockIcon,
  category: categoryIcon,
};

const Card = ({ title, value, iconType }) => {
  const iconUrl = icons[iconType];
  return (
    <div className="rounded-xl bg-gray-50 p-2">
      <div className="flex p-4">
        <img src={iconUrl} alt={iconType} />
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {iconType === "revenue" ? `₹ ${value}` : value}
      </p>
    </div>
  );
};

export default Card;
