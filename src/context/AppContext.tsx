// AppContext.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from 'react';
import { ProductItemType } from '@/types/Product';

interface AppContextProps {
  cartItems: ProductItemType[];
  addToCart: (product: ProductItemType) => void;
  removeFromCart: (product: ProductItemType) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductItemType[]>([]);

  const addToCart = (product: ProductItemType) => {
    const exist = cartItems?.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product: ProductItemType) => {
    const exist = cartItems?.find((x) => x.id === product.id);
    if (exist && exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems?.map((x) => (x.id === product.id ? { ...exist!, qty: exist!.qty - 1 } : x)));
    }
  };

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be within AppContextProvider");
  }
  return context;
}
