"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, increment) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + increment),
    }));
  };

  return (
    <Stack spacing={10}>
      {cart.map((item) => (
        <Box
          key={item.id}
          className={"order summary"}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#F8F8F8",
          }}
        >
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
                  width: "300px",
                  height: "300px",
                  position: "relative",
                  padding: "10px",
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
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </Button>
                <Typography sx={{ padding: "0 10px" }}>
                  {quantities[item.id]}
                </Typography>
                <Button
                  sx={{ color: "#473838" }}
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </Button>
              </Box>
              <Button sx={{ color: "#ED8174" }}>Remove</Button>
            </Box>
          </Stack>
          <Typography sx={{ margin: "auto 80px" }}>
            {item.discountPrice}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
