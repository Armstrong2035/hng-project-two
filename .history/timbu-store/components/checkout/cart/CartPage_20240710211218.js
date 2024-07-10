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
import Header from "../../header/Header";
import CartNav from "./CartNav";
import Link from "next/link";
import ProductRecommendations from "../../Products/ProductRecommendations";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InstallDesktopOutlined } from "@mui/icons-material";
import ProductRecommendationsMobile from "../../Products/ProductRecommendationsMobile";
export default function CartPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Container>
        <CartNav />
        <Grid container>
          <Grid item className={"item"} xl={10} lg={8} md={6} sm={12} xs={12}>
            <Cart />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Stack spacing={5}>
              <Box
                sx={{
                  border: "1px solid grey",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image alt={"station pickup"} src={stationPickup} />
                <Typography>Station pickup</Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid grey",
                  width: "100%",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image alt={"door delivery"} src={doorDelivery} />
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
                  padding: "12px",
                }}
              >
                <Typography>Subtotal</Typography>
                <Typography>$500</Typography>
              </Box>
              <Link href={"/checkout"}>
                <Button
                  sx={{
                    backgroundColor: " #ED8174",
                    color: "#FFFFFF",
                    borderRadius: "0",
                    "&:hover": {
                      backgroundColor: "#C9675B",
                    },
                  }}
                >
                  Checkout
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        {isDesktop ? (
          <ProductRecommendations />
        ) : (
          <ProductRecommendationsMobile />
        )}
      </Container>
    </>
  );
}
