"use client";

import ProductList from "../../components/Products/ProductList";
import { Container } from "@mui/material";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductList />
      </main>
    </>
  );
}
