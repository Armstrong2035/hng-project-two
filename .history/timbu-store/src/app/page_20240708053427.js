"use client";

import ProductList from "../../components/Products/ProductList";
import { Container, Box } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Filters from "../../components/Products/Filters";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Box sx={{ mt: 4 }}>
        <main
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Filters />
          <ProductList />
        </main>
      </Box>
      <Footer />
    </div>
  );
}
