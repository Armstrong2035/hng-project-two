"use client";

import ProductList from "../../components/Products/ProductList";
import { Container } from "@mui/material";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Container sx={{ marginTop: "100px" }}>
        <main
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductList />
        </main>
      </Container>
    </>
  );
}
