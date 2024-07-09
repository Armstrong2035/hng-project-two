"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductNav() {
  return (
    <Box sx={{ width: "100%" }}>
      <IconButton sx={{ paddingBottom: "10px" }}>
        <ArrowBackIcon />
      </IconButton>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6">Product Details</Typography>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
