"use client";
import { inventory } from "@/products";
import {
  Box,
  Grid,
  Container,
  Stack,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
  Button,
  Chip,
  Pagination,
} from "@mui/material";
import Image from "next/image";
import useStore from "@/store/store";
import React from "react";
import Link from "next/link";
import Filters from "./Filters";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FiltersMobile from "./FiltersMobile";

export default function ProductList() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  //   console.log(cart);
  return (
    <Container>
      <Stack alignItems={"center"}>
        {/* <FiltersMobile /> */}
        {/* {!isDesktop && <FiltersMobile />} */}
        <Grid container spacing={3} direction={"column"}>
          {isDesktop && (
            <Grid item lg={12}>
              <Filters />
            </Grid>
          )}

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Grid container spacing={3}>
              {inventory.map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  key={product.productName}
                >
                  <Stack direction={"column"} spacing={2}>
                    <Link
                      href={`/product/${encodeURIComponent(
                        product.productName
                      )}`}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          paddingTop: "100%", // This creates a 1:1 aspect ratio
                          backgroundColor: "#F1F0F0",
                          "&:hover": {
                            backgroundColor: "#E6DFDF",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "5%", // Use percentage-based padding
                          }}
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
                              width: "100%",
                              height: "100%",
                              position: "relative",
                              padding: "10px",
                            }}
                          >
                            <Image
                              src={product.imageUrl}
                              alt={product.productName}
                              layout="fill"
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
                              e.stopPropagation(); // Prevent event from bubbling up to the Link
                              e.preventDefault(); // Prevent the default link behavior
                              addToCart(product);
                            }}
                          >
                            Add To Cart
                          </Box>
                        </Box>
                      </Box>
                    </Link>

                    <Box>
                      <Stack spacing={1} alignItems={"center"}>
                        <Stack direction={"row"}>
                          <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                          />
                          <Typography>{`${product.rating}(5)`}</Typography>
                        </Stack>
                        <Typography>{`${product.productName}`}</Typography>
                        <Stack spacing={2} direction={"row"}>
                          <Typography
                            variant={"h5"}
                          >{`${product.price}`}</Typography>

                          <Typography
                            variant={"h5"}
                            sx={{ color: "#F7AFBC" }}
                          >{`${product.discountPrice}`}</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Pagination count={3} />
      </Stack>
    </Container>
  );
}
