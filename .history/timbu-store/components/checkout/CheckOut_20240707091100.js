"use client";
import useStore from "@/store/store";
import { Typography, Box } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <Box sx={{ width: "80vw" }}>
        <Stack>
          <Typography>Order Summary</Typography>
          <Typography>Total</Typography>
        </Stack>
      </Box>
    </>
  );
}
