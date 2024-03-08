import React, { createContext, useEffect, useState } from "react";
const CartContext = createContext({
  cartItems: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  clearCart: () => {},
  isInCart: (productId) => {},
  totalItems: 0,
  totalPrice: 0,
  updateQuantity: (productId, quantity = 1) => { },
  favourite: [],
  totalFav:0,
  addFavorite: () => { },
  removeFavorite: () => { }
});
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [favourite, setFavourite] = useState(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites"));
    return storedFav || [];
  });
  const updateQuantity = (productId, quantity) => {
    const updateCart = cartItems.map(item => {
      if (item.id === productId) {
        // const updateQuan = 
        return {
          ...item,
          quantity: +item.quantity + +quantity
        }
        
      }
      return item;
    });
    setCartItems(updateCart);
    updateCart.forEach(item => {
      localStorage.setItem(`product-${item.id}`, JSON.stringify(item));
    })
    
  }
  useEffect(() => {
    try {
      const processedProducts = new Set();
      const copyCartItems = [];
      for (const key in localStorage) {
        if (key.startsWith("product-")) {
          const id = key.slice(8);
          if (
            !processedProducts.has(id) &&
            !cartItems.some((item) => item.id === id)
          ) {
            const storedProduct = localStorage.getItem(key);
            const productObject = JSON.parse(storedProduct);
            if (productObject) {
              copyCartItems.push(productObject);
              processedProducts.add(id);
            }
          }
        }
      }
      setCartItems(copyCartItems);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const addFavorite = (product) => {
    setFavourite([...favourite, product]);
    localStorage.setItem("favourites", JSON.stringify([...favourite, product]));   
  }

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourite));
  }, [favourite]);
  const removeFavorite = (productId) => {
    setFavourite(favourite.filter((item) => item.id !== productId));
  }
  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
    localStorage.setItem(`product-${product.id}`,JSON.stringify(product))
  };
  const removeProductFromCart = (productId) => {
    const updateCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updateCart);
    localStorage.removeItem(`product-${productId}`);
  };
  const clearCart = () => {
    setCartItems([]);
    cartItems.forEach(item => {
      localStorage.removeItem(`product-${item.id}`);
    })
  };
    const isInCart = (productId) =>
      cartItems.some((item) => item.id === productId);
  const totalItems = cartItems.reduce((acc, item) => acc + 1, 0);
  const totalFav = favourite.reduce((acc, item) => acc + 1, 0);
  const totalPrice = cartItems.reduce((acc, item) => (acc + item.price)*item.quantity, 0);
  return (
    <CartContext.Provider
      value={{ cartItems,favourite,totalFav, addProductToCart,addFavorite,removeFavorite, removeProductFromCart, clearCart,updateQuantity ,isInCart,totalItems,totalPrice}}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
