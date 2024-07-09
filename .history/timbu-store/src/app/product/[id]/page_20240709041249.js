"use client";

import { useParams } from "next/navigation";
import { inventory } from "@/products";
import {
  Box,
  Stack,
  Typography,
  Rating,
  Button,
  Chip,
  Container,
  Grid,
} from "@mui/material";
import Image from "next/image";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={6}>
            <Box
              sx={{
                width: "506px",
                height: "618.29px",
                border: "1px solid red",
              }}
            >
              <div style={{ width: "571px", height: "571px" }}></div>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
}
