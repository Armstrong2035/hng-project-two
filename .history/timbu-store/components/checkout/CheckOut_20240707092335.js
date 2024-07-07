"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  console.log(cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px",
          backgroundColor: "#EEE4E3",
        }}
      >
        <Typography>Order Summary</Typography>
        <Typography>Total</Typography>
      </Box>
      <Grid container>
        <Grid item>
          <Stack></Stack>
        </Grid>

        <Grid item></Grid>
      </Grid>
    </div>
  );
}
