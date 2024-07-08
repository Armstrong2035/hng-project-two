"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import Group1 from "../../public/utility-images/Group1.png";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7AFBC" }}>
        <Stack alignItems={"center"} textAlign={"center"}>
          <div>
            <Image
              src={Group1}
              layout="responsive"
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
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
