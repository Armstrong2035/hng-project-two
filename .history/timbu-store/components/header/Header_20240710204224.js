"use client";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import Group1 from "../../public/utility-images/Group1.png";
import TimbuStore from "./TimbuStore";
import Promotion from "./Promotion";
import SimpleTabs from "./NavBar";
import Filters from "../Products/Filters";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavMobile from "./NavMobile";

export default function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

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
              direction={isDesktop ? "row" : "column-reverse"}
              justifyContent={"center"}
              sx={{
                backgroundColor: "#F7AFBC",
                width: "100%",
                padding: "20px",
              }}
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
                <Typography
                  sx={{
                    fontFamily: "Kanit sans-serif",
                    fontWeight: "600",
                    fontStyle: "normal",
                    fontSize: "44px",
                    lineHeight: "52px",
                  }}
                >
                  Radiant beauty for every skin glow
                </Typography>
                <Typography
                  variant={"h5"}
                  sx={{
                    fontFamily: "Kanit sans-serif",
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "32px",
                  }}
                >
                  Inclusive skincare for every complexion, from light to deep
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </AppBar>

        {!isDesktop && (
          <Box sx={{ alignSelf: "flex-start" }}>
            <NavMobile />
          </Box>
        )}

        {isDesktop && <SimpleTabs />}
      </Stack>
    </>
  );
}
