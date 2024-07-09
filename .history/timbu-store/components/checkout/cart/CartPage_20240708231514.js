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
export default function CartPage() {
  return (
    <>
      <Stack alignItems={"center"}>
        <Container>
          <Grid container>
            <Grid item className={"item"} xl={10} lg={8} md={6} sm={12} xs={12}>
              <Cart />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  border: "1px solid grey",
                  height: "98px",
                  width: "324px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
