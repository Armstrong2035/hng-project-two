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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F1F0F0",
              }}
            >
              <div style={{ width: "421px", height: "520px" }}>
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
}
