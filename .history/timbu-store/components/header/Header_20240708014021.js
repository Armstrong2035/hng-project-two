"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7AFBC", display: "flex" }}>
        <Stack alignItems={"center"}>
          <Typography variant={"h5"}>
            Radiant beauty for every skin glow
          </Typography>
          <Typography variant={"h6"}>
            Inclusive skincare for every complexion, from light to deep
          </Typography>
        </Stack>
      </AppBar>
    </>
  );
}
