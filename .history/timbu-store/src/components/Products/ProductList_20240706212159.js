"use client";
import Image from "next/image";
import { inventory } from "@/products";
import {
  Box,
  Grid,
  Container,
  Typography,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function ProductList() {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {inventory.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                backgroundColor: "#F1F0F0",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              {product.discount && (
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#EEE4E3",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    zIndex: 1,
                  }}
                >
                  Save {product.discount}%
                </Typography>
              )}
              {product.soldOut && (
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#EEE4E3",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    zIndex: 1,
                  }}
                >
                  Sold out
                </Typography>
              )}
              <Box
                sx={{
                  height: isXsScreen ? 200 : isSmScreen ? 220 : 240,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1" component="h2" gutterBottom noWrap>
                  {product.productName}
                </Typography>
                <Box>
                  <Rating
                    name="read-only"
                    value={product.rating}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {product.rating} ({product.reviewCount})
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      mt: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: "error.main",
                        mr: 1,
                        fontSize: isXsScreen ? "1rem" : "1.25rem",
                      }}
                    >
                      ${product.discountPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
