"use client";

import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

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
        <Link href={"/cart"}>
          <IconButton>
            <ShoppingBagIcon />
          </IconButton>
        </Link>
      </Stack>
    </>
  );
}
