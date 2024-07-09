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

export default function ProductList() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  //   console.log(cart);
  return (
    <Container>
      <Stack alignItems={"center"}>
        <Grid container spacing={3} direction={"column"}>
          {isDesktop && (
            <Grid item lg={12}>
              <Filters />
            </Grid>
          )}

          <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {inventory.map((product, index) => (
                <Box
                  sx={{
                    margin: "10px 10px",
                  }}
                  key={`${product.productName}`}
                >
                  
                </Box>
              ))}
            </Box> */}

            <Grid container>
              {inventory.map((product, index) => (
                <Grid item>
                  <Stack direction={"column"} spacing={2}>
                    <Link
                      href={`/product/${encodeURIComponent(
                        product.productName
                      )}`}
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
                            e.stopPropagation(); // Prevent event from bubbling up to the Link
                            e.preventDefault(); // Prevent the default link behavior
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
