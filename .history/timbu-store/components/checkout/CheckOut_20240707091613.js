"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <div
        style={{
          width: "80vw",
          border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <Typography>Order Summary</Typography>
        <Typography>Total</Typography>
      </div>
    </>
  );
}