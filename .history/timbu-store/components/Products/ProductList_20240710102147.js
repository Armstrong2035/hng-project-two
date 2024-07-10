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
                        <Typography
                          sx={{
                            fontFamily: "Kanit sans-serif",
                            fontWeight: "400",
                            fontStyle: "normal",
                            fontSize: "18px",
                            lingHeight: "26px",
                            color: "#473838",
                          }}
                        >{`${product.productName}`}</Typography>
                        <Stack spacing={2} direction={"row"}>
                          <s>
                            <Typography
                              variant={"h5"}
                              sx={{
                                fontFamily: "Kanit sans-serif",
                                fontWeight: "400",
                                fontStyle: "normal",
                                fontSize: "24px",
                                lingHeight: "32px",
                                color: "#473838",
                              }}
                            >{`${product.price}`}</Typography>
                          </s>

                          <Typography
                            variant={"h5"}
                            sx={{
                              fontFamily: "Kanit sans-serif",
                              fontWeight: "400",
                              fontStyle: "normal",
                              fontSize: "24px",
                              lineHeight: "26px",
                              color: "#F7AFBC",
                            }}
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
