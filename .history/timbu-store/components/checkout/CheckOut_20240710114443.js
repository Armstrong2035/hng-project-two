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
import Cart from "./cart/Cart";
import Invoice from "./Invoice";
import Promotion from "../header/Promotion";
import CheckoutForm from "./CheckoutForm";
import CheckoutNav from "./CheckoutNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
export default function CheckOut() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const font1 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lingHeight: "26px",
    color: "#473838",
  };
  const font2 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "24px",
    lingHeight: "32px",
    color: "#473838",
  };
  return (
    <>
      <Stack alignItems={"center"}>
        <Container>
          <CheckoutNav />
          {isDesktop && (
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
                marginTop: "20px",
                backgroundColor: "#EEE4E3",
              }}
            >
              <Typography sx={font1}>Order Summary</Typography>
              <Typography sx={font1}>Total</Typography>
            </Box>
          )}

          <Grid container>
            <Grid item sm={12} sx={{ width: "94%" }}>
              {!isDesktop && (
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{
                    backgroundColor: "#EEE4E3",
                    padding: "10px 10px",
                    width: "100%",
                  }}
                >
                  <Typography>Order Summary</Typography>
                  <Typography>Total</Typography>
                </Stack>
              )}
            </Grid>
            <Grid item className={"item"} xl={10} lg={8} md={6} sm={12} xs={12}>
              <Cart />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Invoice />
            </Grid>
          </Grid>
          <Box
            style={{
              width: "100%",

              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "#EEE4E3",
            }}
          />
          <CheckoutForm />
        </Container>
      </Stack>
    </>
  );
}
