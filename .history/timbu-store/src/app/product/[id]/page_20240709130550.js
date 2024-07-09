"use client";

import React, { useState } from "react";

import { useParams } from "next/navigation";
import { inventory } from "@/products";

import Product from "../../../../components/Products/Product";
import Header from "../../../../components/header/Header";
import ProductNav from "../../../../components/Products/ProductNav";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <ProductNav />
      <Product product={product} />
    </>
  );
}
