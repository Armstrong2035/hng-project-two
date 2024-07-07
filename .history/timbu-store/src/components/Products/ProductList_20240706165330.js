"use client";
import { inventory } from "@/products";
import { Card } from "@mui/material";

import React from "react";

export default function ProductList() {
  return (
    <>
      {inventory.map((product, index) => {
        <ProductCard product={product} index={index} />;
      })}
    </>
  );
}
