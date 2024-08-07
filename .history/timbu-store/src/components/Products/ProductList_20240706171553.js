"use client";
import { inventory } from "@/products";

import ProductCard from "./ProductCard";

import React from "react";

export default function ProductList() {
  return (
    <>
      {inventory.map((product, index) => {
        <ProductCard product={product} key={product.productName} />;
      })}
    </>
  );
}
