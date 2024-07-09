"use client";

import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function CheckoutNav() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h6">Product Details</Typography>
        <IconButton>
          <ShoppingBagIcon />
        </IconButton>
      </Stack>
    </>
  );
}
