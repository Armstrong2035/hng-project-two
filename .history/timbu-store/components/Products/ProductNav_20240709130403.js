"use client";

import { Box, Icon } from "@mui/material";
import React from "react";
import backArrow from "../../public/icons/back-arrow.svg";

export default function ProductNav() {
  <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
    <Icon>
      <backArrow />
    </Icon>

    <Stack direction={row} justifyContent={"space-between"}>
      <Typography>Product Details</Typography>
    </Stack>
  </Box>;
}
