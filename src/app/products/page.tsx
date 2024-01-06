
import { getDatabase } from "@/action/fetchingAction";
import CardProduct from "@/components/Card/CardProduct";
import React from "react";

async function page() {
  const database = await getDatabase();
  return (
    <div>
      <CardProduct database={database}/>
    </div>
  );
}

export default page;
