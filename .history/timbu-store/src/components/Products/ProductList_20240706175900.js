"use client";
import Image from "next/image";
import { inventory } from "@/products";
import { Box, Grid } from "@mui/material";
import React from "react";

export default function ProductList() {
  return (
    <Grid container style={{ width: "90%", border: "1px solid red" }}>
      {inventory.map((product, index) => (
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
          <Box
            style={{
              border: "1px solid black",
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
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid red",
                backgroundColor: "#f1F0F0",
              }}
            >
              <Image src={product.imageUrl} alt={product.productName} />
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
