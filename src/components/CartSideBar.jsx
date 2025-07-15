import React from "react";
import { useCart } from "../contextApi/CartContext";
import SideBar from "../ui/Sidebar";
import CartItem from "../ui/CartItem";

const CartSideBar = () => {
  const {
    cartItems,
    handleOpenClose,
    isOpen,
    getTotal,
    clearCart,
    updateQuantity,
    removeFromCart,
  } = useCart();
  return (
    <SideBar
      title="Shopping cart"
      isOpen={isOpen}
      handleClose={handleOpenClose}
    >
      {cartItems.length ? (
        <div className="h-screen">
          <button
            className="flex items-center gap-2 w-fit ms-auto p-2 rounded-sm hover:bg-gray-50 hover:cursor-pointer text-lg text-gray-500"
            onClick={clearCart}
          >
            Clear All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
          <ul role="list" className="divide-y divide-gray-200">
            {cartItems.map((items) => (
              <CartItem
                key={items.id}
                cart={items}
                handleRemove={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
          <div className="border-t border-gray-200 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹ {getTotal}</p>
            </div>
            <a
              href="#"
              className="mt-6 flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-blue-700"
            >
              Checkout
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex justify-center items-baseline animate-fadeIn">
          <p>Empty Cart</p>
        </div>
      )}
    </SideBar>
  );
};

export default CartSideBar;
