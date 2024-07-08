"use client";

import ProductList from "../../components/Products/ProductList";
import { Container, Box } from "@mui/material";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 4 }}>
        <Container>
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
      </Box>
    </>
  );
}
