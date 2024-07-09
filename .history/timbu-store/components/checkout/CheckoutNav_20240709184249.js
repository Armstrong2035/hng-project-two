"use client";

import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

export default function CheckoutNav() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton>
          <ShoppingBagIcon />
        </IconButton>
      </Stack>
    </>
  );
}
