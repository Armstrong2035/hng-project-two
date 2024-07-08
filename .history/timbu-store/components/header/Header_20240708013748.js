"use client";
import { AppBar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7AFBC" }}>
        <Typography variant={"h5"}>
          Radiant beauty for every skin glow
        </Typography>
        <Typography variant={"h6"}>
          Inclusive skincare for every complexion, from light to deep
        </Typography>
      </AppBar>
    </>
  );
}
