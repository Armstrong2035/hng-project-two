"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import Group1 from "../../public/utility-images/Group1.png";
import TimbuStore from "./TimbuStore";

export default function Header() {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "",
        }}

        #F8F8F8
      >
        <Stack alignItems={"center"}>
          <TimbuStore />
          <Stack
            alignItems={"center"}
            textAlign={"center"}
            direction={"row"}
            justifyContent={"center"}
            sx={{backgroundImage: '#F7AFBC'}}
          >
            <Box sx={{ width: "250.08px", height: "150.77px" }}>
              <Image
                src={Group1}
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Typography variant={"h5"}>
                Radiant beauty for every skin glow
              </Typography>
              <Typography variant={"h6"}>
                Inclusive skincare for every complexion, from light to deep
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}
