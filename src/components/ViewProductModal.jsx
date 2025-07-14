import React from "react";
import { useProductContext } from "../contextApi/ProductContext";
import Modal from "../ui/Modal";
import X from "../assets/cross.svg";
import { useCart } from "../contextApi/CartContext";

const ViewProductModal = ({ id, isOpen, onCancel }) => {
  const { products } = useProductContext();
  const { addToCart } = useCart();
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex] || "";
  const handleCart = (data) => {
    addToCart(data);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={onCancel}>
      <div className="flex flex-col md:flex-row gap-6 relative">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex">
          <button
            onClick={onCancel}
            className="absolute -top-9 -right-9 bg-white md:top-0 md:right-0 text-black p-1 hover:scale-110 border-2 rounded-[100%]"
            title="Close"
          >
            <img src={X} alt="cross" />
          </button>

          <div className="mt-6 md:mt-0 space-y-4 grow flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-700 leading-6">
              {
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, labore quaerat magni ad dolores libero culpa ipsa fugit voluptates ipsam!"
              }
            </p>
            <p className="text-xl font-semibold">₹ {product.price}</p>

            <button
              className={`w-full md:mx-auto bg-blue-600 text-white p-3 font-semibold ${
                product.status
                  ? "hover:bg-blue-700 cursor-pointer"
                  : "cursor-not-allowed bg-blue-400"
              }`}
              onClick={() => handleCart(product)}
              disabled={product.status ? false : true}
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewProductModal;
