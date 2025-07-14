import React from "react";
import { useProductContext } from "../contextApi/ProductContext";
import Modal from "../ui/Modal";

const DeleteProductModal = ({ id, isOpen, onCancel }) => {
  const { products, setProducts } = useProductContext();
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex] || "";

  const handleDelete = () => {
    const updatedProduct = products.filter((item) => item.id !== id);
    setProducts(updatedProduct);
    onCancel();
  };
  if (product === "") {
    return null;
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={onCancel}>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold mb-2">
          Are you sure you want to delete <strong>{product.name}</strong>?
        </h3>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleDelete}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
