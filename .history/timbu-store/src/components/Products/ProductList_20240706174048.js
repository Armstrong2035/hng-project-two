"use client";
import { inventory } from "@/products";

import { Box, Grid } from "@mui/material";

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

import React from "react";

export default function ProductList() {
  return (
    <>
      <Grid container style={{ width: "90vw", border: "1px solid red" }}>
        {inventory.map((product, index) => (
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Box style={{ backgroundColor: "#f1F0F0" }}>
              <div style={{ width: "232px", height: "286px" }}>
                <img src={product.imageUrl} />
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
