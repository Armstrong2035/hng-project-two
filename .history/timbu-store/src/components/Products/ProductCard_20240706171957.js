"use client";

import React, { useState } from "react";

export default function ProductCard({ product }) {
  console.log(product);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <h4>{product.aboutProduct}</h4>
    </>
  );
}
