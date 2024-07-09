"use client";
import { inventory } from "@/products";
import {
  Container,
  Grid,
  Box,
  Chip,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ProductRecommendations() {
  const recommendations = inventory.slice(0, 4);
  return (
    <Stack alignItems={"center"} sx={{ paddingTop: "10px" }}>
      <Typography sx={{ alignSelf: "flex-start" }}>
        You may also like
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {recommendations.map((product, index) => (
          <Box
            sx={{
              margin: "10px 10px",
            }}
          >
            <Stack direction={"column"} spacing={2}>
              <Link
                href={`/product/${encodeURIComponent(product.productName)}`}
              >
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
                  <Chip
                    label={"sale"}
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      borderRadius: "0",
                      backgroundColor: "#EEE4E3",
                    }}
                  />

                  <div
                    style={{
                      width: "300",
                      height: "300",
                      position: "relative",
                      padding: "10px, 10px",
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

                  <Box
                    className="add-to-cart"
                    sx={{
                      backgroundColor: "#ED8174",
                      color: "white",
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#C9675B",
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Add To Cart
                  </Box>
                </Box>
              </Link>

              <Box>
                <Stack spacing={1} alignItems={"center"}>
                  <Stack direction={"row"}>
                    <Rating name="read-only" value={product.rating} readOnly />
                    <Typography>{`${product.rating}(5)`}</Typography>
                  </Stack>
                  <Typography>{`${product.productName}`}</Typography>
                  <Stack spacing={2} direction={"row"}>
                    <Typography variant={"h5"}>{`${product.price}`}</Typography>

                    <Typography
                      variant={"h5"}
                      sx={{ color: "#F7AFBC" }}
                    >{`${product.discountPrice}`}</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>

      <Link href={"/checkout"}>
        <p>checkout</p>
      </Link>
    </Stack>
  );
}
