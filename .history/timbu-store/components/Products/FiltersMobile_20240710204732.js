"use client";

import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";

export default function FiltersMobile() {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"center"}
        sx={{ width: "100%" }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <ShoppingBagIcon />
        </IconButton>
      </Stack>
    </>
  );
}
