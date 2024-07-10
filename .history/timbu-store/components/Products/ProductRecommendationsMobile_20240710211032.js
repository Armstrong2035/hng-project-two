"use client";

import { inventory } from "@/products";
import Carousel from "react-material-ui-carousel";
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

export default function ProductRecommendationsMobile() {
  const recommendations = inventory.slice(0, 4);

  return (
    <Stack alignItems={"center"} sx={{ paddingTop: "50px" }}>
      <Typography sx={{ alignSelf: "flex-start", mb: 2 }}>
        You may also like
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible
          indicators={false}
          animation="slide"
        >
          {recommendations.map((product) => (
            <Box
              sx={{
                flex: 1,
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

                height: "18.125rem",
                padding: "1.875rem 1.875rem",
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
                  padding: "5px 5px",
                }}
              />

              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={product.imageUrl}
                  alt={`${product.productName}`}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>

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
                  e.stopPropagation(); // Prevent event from bubbling up to the Link
                  e.preventDefault(); // Prevent the default link behavior
                  addToCart(product);
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Kanit sans-serif",
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: "18px",
                    lingHeight: "26px",
                    color: "#FFFFFF",
                  }}
                >
                  Add To Cart
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
}
