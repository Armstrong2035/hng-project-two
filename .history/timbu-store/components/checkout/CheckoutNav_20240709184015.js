"use client";

import React from "react";

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
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
    </>
  );
}
