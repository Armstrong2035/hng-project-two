"use client";
import { inventory } from "@/products";

import { Box } from "@mui/material";

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
      {inventory.map((product, index) => (
        <Box style={{ color: "#f1F0F0" }}>sfbvusfbvoo</Box>
      ))}
    </>
  );
}
