"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack, Grid } from "@mui/material";

import React, { useState } from "react";

export default function CheckOut() {
  const [orderVolume, setOrderVolume] = useState(1);
  const cart = useStore((state) => state.cart);

  console.log(cart);

  return (
    <Stack
     
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

      <Box>
        <Grid container>
          <Grid item xl={8} l={8} m={6} sm={12} xs={12}>
            <Stack>
              <Box>
                <div></div>
                <Typography></Typography>
                <Box>
                  <Typography>+</Typography>
                  <Typography>{orderVolume}</Typography>
                  <Typography>-</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item xl={4} l={4} m={6} sm={12} xs={12}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
