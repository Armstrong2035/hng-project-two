"use client";

import { Typography, Box } from "@mui/material";
import React from "react";

const fontStyle = {
  fontFamily: "Kanit",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0.005em",
  textAlign: "left",
  color: "#473838",
};

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
        <Typography>
          FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
        </Typography>
      </Box>
    </>
  );
}
