import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getDefaultWishlist = () => {
  let wishlist = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    wishlist[index] = 0;
  }
  return wishlist;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: false }));
  };

  const getTotalWishlistItems = () => {
    let totalWishlistItems = 0;
    for (const item in wishlistItems) {
      if (wishlistItems[item]) {
        totalWishlistItems++;
      }
    }
    return totalWishlistItems;
  };

  // New getTotalWishlistAmount function
  const getTotalWishlistAmount = () => {
    let totalAmount = 0;
    for (const item in wishlistItems) {
      if (wishlistItems[item]) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const moveToCart = (itemId) => {
    addToCart(itemId);
    removeFromWishlist(itemId);
  };

  const contextValue = {
    cartItems,
    wishlistItems,
    getTotalCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    getTotalWishlistItems,
    getTotalWishlistAmount, // Provide this in the context
    moveToCart,
    all_product,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
