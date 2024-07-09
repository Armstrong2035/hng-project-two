"use client";
import { inventory } from "@/products";
import {
  Box,
  Grid,
  Container,
  Stack,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
  Button,
  Chip,
  Pagination,
} from "@mui/material";
import Image from "next/image";
import useStore from "@/store/store";
import React from "react";
import Link from "next/link";
import Filters from "./Filters";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProductList() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  //   console.log(cart);
  return (
    <Container>
      <Stack alignItems={"center"}>
        <Grid container spacing={3} direction={"column"}>
          {isDesktop && (
            <Grid item lg={12}>
              <Filters />
            </Grid>
          )}

          <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {inventory.map((product, index) => (
                <Box
                  sx={{
                    margin: "10px 10px",
                  }}
                  key={`${product.productName}`}
                >
                  
                </Box>
              ))}
            </Box> */}
          </Grid>
        </Grid>
        <Pagination count={3} />
      </Stack>
    </Container>
  );
}
