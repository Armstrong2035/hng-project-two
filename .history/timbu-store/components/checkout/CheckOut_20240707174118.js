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
} from "@mui/material";
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
        <Box
          key={item.id}
          className={"order summary"}
          style={{ width: "80vw", margin: "10px 0" }}
        >
          <Grid container>
            <Grid className={"item"} item xl={8} lg={8} md={6} sm={12} xs={12}>
              <Card elevation={"none"} sx={{ backgroundColor: "#F8F8F8" }}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <CardContent
                      sx={{ backgroundColor: "#F1F0F0", padding: 0 }}
                    >
                      <div
                        style={{
                          width: "100%",
                          position: "relative",
                          padding: "16px",
                        }}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.productName}
                          layout="responsive"
                          width={300}
                          height={300}
                          objectFit="contain"
                        />
                      </div>
                    </CardContent>

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
                  </Stack>

                  <CardContent>
                    <Typography>{item.discountPrice}</Typography>
                  </CardContent>
                </Stack>
              </Card>
            </Grid>

            <Grid
              className={"invoice"}
              item
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
            ></Grid>
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
