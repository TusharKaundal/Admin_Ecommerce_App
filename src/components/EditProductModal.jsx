import React, { useState, useEffect } from "react";
import { useProductContext } from "../contextApi/ProductContext";
import DropDown from "../ui/DropDown";
import Modal from "../ui/Modal";
import { categories } from "../utils/constants";

const EditProductModal = ({ id, isOpen, onCancel }) => {
  console.log(id, isOpen, onCancel);
  const { products, setProducts } = useProductContext();
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = [...products];
    updatedProduct[productIndex] = {
      ...updatedProduct[productIndex],
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
      status: Number(formData.stock) > 0,
    };

    setProducts(updatedProduct);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={onCancel}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 rounded w-full"
            required
          />
          <DropDown
            title="category"
            selected={formData.category}
            onChange={handleChange}
            data={categories}
            defaultOption={false}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            min="0"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            min="0"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProductModal;
