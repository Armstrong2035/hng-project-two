"use client";
import useStore from "@/store/store";
import { Typography } from "@mui/material";

import React from "react";

export default function CheckOut() {
  const cart = useStore((state) => state.cart);

  return <>
  <Box sx={{width: '80vw'}}

    <Typography>Order Summary</Typography>
    <Typography>Total</Typography>
  </Box>
  
     
  </>;
}
