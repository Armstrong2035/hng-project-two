"use client";
import Image from "next/image";
import { inventory } from "@/products";
import { Box, Grid, Container, Stack } from "@mui/material";
import React from "react";

const palette = {
  background: {
    default: "#f8f8f8",
    accent: "#f18080",
  },
  display: {
    main: "#f7AFBC",
  },
  button: {
    primary: "#ED8174",
    secondary: "#EEE4E3",
  },
  text: {
    primary: "#473838",
    secondary: "#F7AFBC",
    tertiary: "#9B9B9B",
  },
};

export default function ProductList() {
  return (
    <Grid container style={{ width: "90%" }}>
      {inventory.map((product, index) => (
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <div
              style={{
                width: "340px",
                height: "340px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F1F0F0",
              }}
            >
              <Stack>
                <div alignSelf: "flex-start",>
                  <p
                    style={{
                      backgroundColor: "#EEE4E3",
                      
                    }}
                  >
                    save 14%
                  </p>
                </div>

                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </Stack>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
