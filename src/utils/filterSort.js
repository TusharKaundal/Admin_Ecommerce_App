export const filterByCategory = (product, selected) => {
  return product.filter((item) => item.category === selected);
};

export const filterByStockStatus = (product, selected) => {
  if (selected === "In") {
    return product.filter((item) => item.stock > 0);
  }
  if (selected === "Out") {
    return product.filter((item) => item.stock === 0);
  }
};

export const getSortedData = (product, key, direction) => {
  if (key !== "") {
    if (key === "id") {
      if (direction === "asc") return product;
      return [...product].reverse();
    }
    return [...product].sort((a, b) => {
      const val1 = a[key];
      const val2 = b[key];
      if (typeof val1 === "number" && typeof val2 === "number") {
        return direction === "asc" ? val1 - val2 : val2 - val1;
      } else {
        return direction === "asc"
          ? val1.localeCompare(val2)
          : val2.localeCompare(val1);
      }
    });
  }
};
