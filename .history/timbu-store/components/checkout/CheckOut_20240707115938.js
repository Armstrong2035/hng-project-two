"use client";
import useStore from "@/store/store";
import Image from "next/image";
import { Typography, Box, Stack, Grid, Button, Card } from "@mui/material";

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
              <Stack direction={"row"}>
                <Box>
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.productName}
                      layout="responsive"
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  </div>
                </Box>

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
