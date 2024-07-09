"use client";

import { Box, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import backArrow from "../../public/icons/back-arrow.svg";
import cart from "../../public/icons/cart.svg";

export default function ProductNav() {

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
    <Icon>{backArrow}</Icon>

    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography>Product Details</Typography>
      <Icon>{cart}</Icon>
    </Stack>
  </Box>;

    )
  
}
