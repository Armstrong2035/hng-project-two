"use client";

import React, { useState } from "react";

import { useParams } from "next/navigation";
import { inventory } from "@/products";

import Product from "../../../../components/Products/Product";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const [orderVolume, setOrderVolume] = useState(1);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Product product={product} />
    </>
  );
}