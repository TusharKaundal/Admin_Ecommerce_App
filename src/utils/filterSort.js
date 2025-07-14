export const filterByCategory = (product, selected) => {
  return product.filter((item) => item.category === selected);
};

export const filterByStockStatus = (product, selected) => {
  console.log(product[0], selected);
  if (selected === "In") {
    return product.filter((item) => item.stock > 0);
  }
  if (selected === "Out") {
    return product.filter((item) => item.stock === 0);
  }
};

export const getSortedData = (product, key, direction) => {
  if (key !== "") {
    product.sort((a, b) => {
      const id1 = Number(a.id.split("#")[1]);
      const id2 = Number(b.id.split("#")[1]);

      const val1 = a[key];
      const val2 = b[key];

      if (key === "id") {
        return direction === "asc" ? id1 - id2 : id2 - id1;
      }
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
