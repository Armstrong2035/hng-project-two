"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Cart() {
  const [orderVolume, setOrderVolume] = useState(1);
  const cart = useStore((state) => state.cart);

  return (
    <Stack spacing={4}>
      {cart.map((item) => (
        <Grid container key={item.id} spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F1F0F0",
                position: "relative",
                "&:hover": {
                  backgroundColor: "#E6DFDF",
                },
                width: "100%",
                paddingTop: "100%", // This creates a square aspect ratio
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "10px",
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: "16px" }}>
              <Typography>{item.productName}</Typography>
              <Box
                sx={{
                  border: "1px solid #B2A6A6",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <Button
                  sx={{ color: "#473838" }}
                  onClick={() =>
                    setOrderVolume(orderVolume > 1 ? orderVolume - 1 : 1)
                  }
                >
                  -
                </Button>
                <Typography sx={{ padding: "0 10px" }}>
                  {orderVolume}
                </Typography>
                <Button
                  sx={{ color: "#473838" }}
                  onClick={() => setOrderVolume(orderVolume + 1)}
                >
                  +
                </Button>
              </Box>
              <Button sx={{ color: "#ED8174" }}>Remove</Button>
            </Box>
            <Typography
              sx={{
                textAlign: { xs: "right", md: "left" },
                marginRight: { xs: "16px", md: "0" },
                marginTop: { xs: "16px", md: "0" },
              }}
            >
              {item.discountPrice}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}></Grid>
        </Grid>
      ))}
    </Stack>
  );
}
