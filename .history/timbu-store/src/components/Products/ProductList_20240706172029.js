"use client";
import { inventory } from "@/products";

import ProductCard from "./ProductCard";

import React from "react";

export default function ProductList() {
  console.log(inventory[0]);
  return (
    <>
      {inventory.map((product, index) => {

<h2>{product.productName</h2>
        
      })}

      
    </>
  );
}
