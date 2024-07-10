"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Cart() {
  const [orderVolume, setOrderVolume] = useState(1);
  const cart = useStore((state) => state.cart);
  console.log(cart);

  const font1 = {
    fontFamily: "Kanit",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "0.005em",
    textAlign: "center",
  };
  const font2 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "24px",
    lingHeight: "32px",
    color: "#473838",
  };

  const font3 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lingHeight: "26px",
    color: "#473838",
  };

  return (
    <Stack spacing={4}>
      {cart.map((item) => (
        <Grid container key={item.id} spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
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
                paddingTop: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={item.imageUrl.src}
                  alt={`${item.productName}`}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box sx={{ padding: "16px" }}>
                <Typography sx={font2}>{item.productName}</Typography>
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
                  <Typography sx={{ padding: "0 10px" }} style={font2}>
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
              <Box>
                <Typography
                  sx={{
                    textAlign: { xs: "right", md: "left" },
                    marginRight: { xs: "16px", md: "0" },
                    marginTop: { xs: "16px", md: "0" },
                  }}
                  style={font1}
                >
                  {item.discountPrice}
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}></Grid>
        </Grid>
      ))}
    </Stack>
  );
}
