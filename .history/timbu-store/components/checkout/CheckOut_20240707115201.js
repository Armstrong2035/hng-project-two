"use client";
import useStore from "@/store/store";
import { Typography, Box, Stack, Grid, Button } from "@mui/material";

import React, { useState } from "react";

export default function CheckOut() {
  const [orderVolume, setOrderVolume] = useState(1);
  const cart = useStore((state) => state.cart);

  console.log(cart);

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

      {cart.map((item) => (
        <Box className={"order summary"}>
          <Grid container>
            <Grid className={"item"} item xl={8} l={8} m={6} sm={12} xs={12}>
              <Stack>
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    padding: "16px",
                  }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="contain"
                  />
                </div>

                <Box>
                  <Typography>{item.productName}</Typography>
                  <Typography>+</Typography>
                  <Typography>{orderVolume}</Typography>
                  <Typography>-</Typography>
                  <Button>Remove</Button>
                </Box>
              </Stack>
            </Grid>

            <Grid
              classNMame={"invoice"}
              item
              xl={4}
              l={4}
              m={6}
              sm={12}
              xs={12}
            ></Grid>
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
