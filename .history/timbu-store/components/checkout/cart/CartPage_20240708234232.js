"use client";
import useStore from "@/store/store";
import Image from "next/image";
import doorDelivery from "../../../public/icons/door-delivery.svg";
import stationPickup from "../../../public/icons/station-pickup.svg";
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
export default function CartPage() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item className={"item"} xl={10} lg={8} md={6} sm={12} xs={12}>
            <Cart />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Stack spacing={5}>
              <Box
                sx={{
                  border: "1px solid grey",
                  height: "98px",
                  width: "324px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={stationPickup} />
                <Typography>Station pickup</Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid grey",
                  height: "98px",
                  width: "324px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={doorDelivery} />
                <Typography>Station pickup</Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid grey",
                  width: "324px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                }}
              >
                <Typography>Subtotal</Typography>
                <Typography>$500</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
