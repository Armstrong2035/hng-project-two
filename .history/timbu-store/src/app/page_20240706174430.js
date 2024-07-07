"use client";

import ProductList from "@/components/Products/ProductList";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProductList />
    </main>
  );
}
