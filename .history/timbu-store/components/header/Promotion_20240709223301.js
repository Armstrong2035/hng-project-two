"use client";

import { Typography, Box } from "@mui/material";
import React from "react";



export default function Promotion() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#EEE4E3",
          padding: "15px, 0",
        }}
      >
        <Typography sx={fontFamily: kanit-regular}>
          FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
        </Typography>
      </Box>
    </>
  );
}
