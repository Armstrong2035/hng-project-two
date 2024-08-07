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
      {cart.map((item) => (
        <Box
          key={item.id}
          className={"order summary"}
          style={{
            width: "100%",
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ backgroundColor: "#F8F8F8" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
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

                {/* </Container> */}
              </Box>
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
            </Stack>
          </Box>

          <Typography sx={{ margin: "auto 80px" }}>
            {item.discountPrice}
          </Typography>
        </Box>
      ))}
    </>
  );
}
