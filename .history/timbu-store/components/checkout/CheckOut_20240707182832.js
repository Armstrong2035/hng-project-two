"use client";
import useStore from "@/store/store";
import Image from "next/image";
import {
  Typography,
  Box,
  Stack,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import Cart from "./Cart";

export default function CheckOut() {
  return (
    <Stack alignItems={"center"}>
      <Box
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px",
          backgroundColor: "#EEE4E3",
        }}
        className="heading"
      >
        <Typography>Order Summary</Typography>
        <Typography>Total</Typography>
      </Box>

      <Grid item className={"item"} xl={8} lg={8} md={6} sm={12} xs={12}></Grid>
    </Stack>
  );
}
