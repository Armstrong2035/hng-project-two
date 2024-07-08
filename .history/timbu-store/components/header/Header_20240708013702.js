"use client";
import { AppBar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7AFBC" }}>
        <Typography variant={"h2"}>
          Radiant beauty for every skin glow
        </Typography>
      </AppBar>
    </>
  );
}
