"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <Box
        style={{
          width: "80vw",
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Order Summary</Typography>
        <Typography>Total</Typography>
      </Box>
    </>
  );
}
