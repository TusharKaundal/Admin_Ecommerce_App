import React from "react";

const CartItem = ({ cart, handleRemove, updateQuantity }) => {
  return (
    <li key={cart.id} className="flex py-6 animate-slideDown">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={cart.name}
          src={cart.image}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{cart.name}</h3>
            <p className="ml-4">{cart.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{cart.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex gap-2">
            <p className="text-gray-500">Qty {cart.quantity}</p>
            <div className="flex gap-2 text-gray-500">
              <button
                className="flex justify-center items-center pb-1 w-5 h-5 border border-gray-300 rounded-md cursor-pointer text-xl font-medium hover:bg-blue-600 hover:text-white"
                onClick={() => updateQuantity(cart.id, "inc")}
              >
                +
              </button>
              <button
                className="flex justify-center items-center pb-1 w-5 h-5 border border-gray-300 rounded-md cursor-pointer text-xl font-medium hover:bg-blue-600 hover:text-white"
                onClick={() => updateQuantity(cart.id, "dec")}
              >
                -
              </button>
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-500 hover:cursor-pointer"
              onClick={() => handleRemove(cart.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
