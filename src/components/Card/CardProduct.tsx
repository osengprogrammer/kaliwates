"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Assuming you have the correct import for useFormState
import { useFormState } from 'react-dom';
import { CartItemType, ProductItemType } from '@/types/Product';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAppContext } from '@/context/AppContext';

interface CardProductProps {
  database: ProductItemType[];
}

function CardProduct({ database }: CardProductProps) {

  const {  cartItems, addToCart, removeFromCart } = useAppContext();

  // const [cartItems, setCartItems] = useLocalStorage<ProductItemType[]>("shopping-cart", []);  // Use the useLocalStorage hook
const onAdd = (product: ProductItemType) => {
  addToCart(product)

}
console.log(cartItems)
  // const onAdd = (product: ProductItemType) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  // console.log(cartItems)
  const onRemove = (product: ProductItemType) => {
    removeFromCart(product)
  }
  // const onRemove = (product: ProductItemType) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist && exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist!, qty: exist!.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  // const makeOrder = (x: ProductItemType) => {
  //   console.log(x);
  // };

  // useEffect (() => {
  //   // Update local storage whenever cartItems changes
  //   setCartItems(cartItems);
  // }, [cartItems, setCartItems])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
      {database && database.map((x: ProductItemType) => (
        <div key={x.id}>
          <Card>
            <CardHeader>
              <CardTitle>{x.PRODUCT}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{x.CODE}</p>
              <p>{x.COLOR}</p>
              <p>{x.SIZE}</p>
              <p>{x.FABRIC_COLOR}</p>
              <p>{x.FABRIC_QTY}</p>
              <p>{x.LINING_COLOR}</p>
              <p>{x.LINING_QTY}</p>
            </CardContent>
            <CardFooter>
              <p>{x.CUSTOMER}</p>
            </CardFooter>
            <div className='flex items-center justify-around'>
              <Button onClick={() => onAdd(x)}> Add to Cart</Button>
              <Button onClick={() => onRemove(x)}> Remove from Card</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
