/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

// 1. Create context
const CartContext = createContext();

// 2. Provider with memoized handlers
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((product) => {
    console.log(product);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, action) => {
    setCartItems((prev) => {
      console.log(prev[id]);
      return prev
        .filter((item) =>
          item.id === id && item.quantity === 1 && action === "dec"
            ? false
            : true
        )
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  action === "inc" ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        );
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleOpenClose = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // 🧠 Memoize context value
  const value = useMemo(
    () => ({
      cartItems,
      isOpen,
      handleOpenClose,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal: cartItems.reduce((acc, item) => acc + item.price, 0),
    }),
    [
      cartItems,
      isOpen,
      handleOpenClose,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3. Hook to use context
export const useCart = () => useContext(CartContext);
