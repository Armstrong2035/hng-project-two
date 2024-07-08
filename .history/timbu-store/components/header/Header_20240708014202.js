"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7AFBC" }}>
        <Stack alignItems={"center"}>
          <Box>
            <Typography variant={"h5"}>
              Radiant beauty for every skin glow
            </Typography>
            <Typography variant={"h6"}>
              Inclusive skincare for every complexion, from light to deep
            </Typography>
          </Box>
        </Stack>
      </AppBar>
    </>
  );
}
