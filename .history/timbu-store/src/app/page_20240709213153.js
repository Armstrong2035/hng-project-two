"use client";

import ProductList from "../../components/Products/ProductList";
import { Container, Box } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Filters from "../../components/Products/Filters";

export default function Home() {
  return (
    <>
      <Grid>
        <Header />
        <Box sx={{ mt: 4 }}>
          <ProductList />
        </Box>
        <Footer />
      </Grid>
    </>
  );
}
