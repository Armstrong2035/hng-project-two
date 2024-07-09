"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import {
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

export default function Cart() {
  const [orderVolume, setOrderVolume] = useState(1);
  const cart = useStore((state) => state.cart);

  console.log(cart);
  return (
    <>
      <Stack spacing={10}>
        {cart.map((item) => (
          // <Box

          //   className={"order summary"}
          //   style={{
          //     width: "100%",
          //     display: "flex",
          //     alignItems: "center",
          //     justifyContent: "space-between",
          //   }}
          // >
          <Grid container key={item.id}>
            <Grid item sm={12} lg={6}>
              <Box>
                <Grid container>
                  <Grid item sm={12} lg={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F1F0F0",
                        position: "relative",
                        "&:hover .add-to-cart": {
                          opacity: 1,
                        },

                        "&:hover": {
                          backgroundColor: "#E6DFDF",
                        },
                        width: "260px",
                        height: "290px",
                      }}
                      elevation={"none"}
                    >
                      <div
                        style={{
                          width: "300",
                          height: "300",
                          position: "relative",
                          padding: "10px, 10px",
                        }}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.productName}
                          layout="responsive"
                          width={500}
                          height={500}
                          objectFit="contain"
                        />
                      </div>
                    </Box>
                  </Grid>

                  <Grid item sm={12} lg={6}>
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
                            setOrderVolume(
                              orderVolume > 1 ? orderVolume - 1 : 1
                            )
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
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item sm={12} lg={6}>
              <Typography sx={{ margin: "auto 80px" }}>
                {item.discountPrice}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </>
  );
}
