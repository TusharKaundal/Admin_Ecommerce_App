import { categories } from "./constants";

export function searchProducts(products, searchText) {
  const category =
    categories.find((item) => item.toLowerCase().includes(searchText)) ?? "";
  if (category) {
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
}
