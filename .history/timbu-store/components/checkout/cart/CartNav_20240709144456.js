"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function CartNav() {
  return (
    <Box sx={{ width: "100%", paddingBottom: "20px" }}>
      <Link href={"/"}>
        <IconButton sx={{ paddingBottom: "15px" }}>
          <ArrowBackIcon />
        </IconButton>
      </Link>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6">Cart</Typography>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}