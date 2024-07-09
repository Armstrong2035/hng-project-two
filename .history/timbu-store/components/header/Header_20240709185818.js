"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import Group1 from "../../public/utility-images/Group1.png";
import TimbuStore from "./TimbuStore";
import Promotion from "./Promotion";
import SimpleTabs from "./NavBar";
import Filters from "../Products/Filters";

export default function Header() {
  return (
    <>
      <Stack alignItems={"center"}>
        <AppBar
          elevation={"none"}
          sx={{
            backgroundColor: "#F8F8F8",
            position: "relative",
            width: "100%",
          }}
        >
          <Stack alignItems={"center"}>
            <Promotion />
            <TimbuStore />
            <Stack
              alignItems={"center"}
              textAlign={"center"}
              direction={"row"}
              justifyContent={"center"}
              sx={{ backgroundColor: "#F7AFBC", width: "100%" }}
            >
              <Box sx={{ width: "250.08px", height: "150.77px" }}>
                <Image
                  src={Group1}
                  alt={"group of women"}
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
        <SimpleTabs />
      </Stack>
    </>
  );
}
