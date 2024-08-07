"use client";

import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Stack } from "@mui/material";

export default function CheckoutNav() {
  return (
    <>
      <Stack direction={"row"} alignItems="center", justifyContent={'space-between'} sx={{ width: "100%" }}>
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
