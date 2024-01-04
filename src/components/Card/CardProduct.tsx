"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardProduct({database}:any) {

  
  const makeOrder = (x: string) => {
    console.log(x);
  };
  return (
    <div>
        {database.map((x: any) => (
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
            <Button onClick={()=>makeOrder(x.id)}> Make Order</Button>
          </Card>

          {/* {onclick=()=>makeOrder(x.id)}} */}
        </div>
      ))}
    </div>
  )
}

export default CardProduct