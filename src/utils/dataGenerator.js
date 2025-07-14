import { categories } from "./constants";
const generateMockProducts = (count) => {
  const productsMap = new Map();
  for (let i = 1; i <= count; i++) {
    const stock = Math.floor(Math.random() * 100); // Generate stock first
    const category = categories[i % categories.length];
    const product = {
      id: crypto.randomUUID() + "#" + String(i),
      name: `Product ${i}`,
      image: `https://dummyjson.com/image/1080x720/24a0d1/ffffff?fontFamily=pacifico&type=webp&text=${category} ${i}`,
      category: category,
      price: Math.floor(Math.random() * 5000),
      stock: stock,
      status: stock > 0 ? 1 : 0,
    };
    productsMap.set(i, product);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from(productsMap.values()));
    }, 1000);
  });
};

export { generateMockProducts };
