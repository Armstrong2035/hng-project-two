"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <Box
        sx={{ width: "80vw", border: "1px solid red", flexDirection: "row" }}
      >
        <Typography alignSelf={"flex-start"}>Order Summary</Typography>
        <Typography alignSelf={"flex-end"}>Total</Typography>
      </Box>
    </>
  );
}
