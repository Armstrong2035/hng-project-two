"use client";

import { Typography, Box } from "@mui/material";
import React from "react";


const fontStyle = 
{font-family: Kanit;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.005em;
text-align: left;}


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
        <Typography sx={{ color: "#473838" }}>
          FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
        </Typography>
      </Box>
    </>
  );
}
