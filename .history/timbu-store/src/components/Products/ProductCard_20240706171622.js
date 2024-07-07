"use client";

import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <h4>{product.aboutProduct}</h4>
    </>
  );
}
