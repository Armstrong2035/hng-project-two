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
  Container,
  AppBar,
} from "@mui/material";
import React, { useState } from "react";
import Cart from "./Cart";
import Invoice from "./Invoice";
import Promotion from "../header/Promotion";
export default function CheckOut() {
  return (
    <>
      <AppBar>
        <Promotion />
      </AppBar>

      <Stack alignItems={"center"}>
        <Box
          style={{
            width: "80vw",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px",
            marginTop: "20px",
            backgroundColor: "#EEE4E3",
          }}
          className="heading"
        >
          <Typography>Order Summary</Typography>
          <Typography>Total</Typography>
        </Box>

        <Container>
          <Grid container>
            <Grid item className={"item"} xl={10} lg={8} md={6} sm={12} xs={12}>
              <Cart />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Invoice />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
