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
    <Grid container style={{ width: "90%", border: "1px solid red" }}>
      {inventory.map((product, index) => (
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
          <Box style={{ backgroundColor: "#f1F0F0" }}>
            <div
              style={{ width: "232px", height: "286px", position: "relative" }}
            >
              <Image
                src={product.imageUrl}
                alt={product.productName}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
