"use client";

import ProductList from "../../components/Products/ProductList";
import { Container, Box } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <Box sx={{ mt: 4 }}>
        <main
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductList />
        </main>
      </Box>
      <Footer />
    </div>
  );
}
