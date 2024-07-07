"use client";
import Image from "next/image";
import { inventory } from "@/products";
import { Box, Grid } from "@mui/material";
import React from "react";

const palette = {
  background: {
    default: "#f8f8f8",
    accent: "#f18080",
  },
  display: {
    main: "#f7AFBC",
  },
  button: {
    primary: "#ED8174",
    secondary: "#EEE4E3",
  },
  text: {
    primary: "#473838",
    secondary: "#F7AFBC",
    tertiary: "#9B9B9B",
  },
};

export default function ProductList() {
  return (
    <Container>
      <Grid container style={{ width: "90%", border: "1px solid red" }}>
        {inventory.map((product, index) => (
          <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
            <Box
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div
                style={{
                  width: "340px",
                  height: "340px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: palette.background.default,
                }}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
