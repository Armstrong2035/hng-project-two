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
} from "@mui/material";
import Image from "next/image";

import useStore from "@/store/store";
import React from "react";
import Link from "next/link";
import Filters from "./Filters";

export default function ProductList() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  //   console.log(cart);
  return (
    <Stack alignItems={"center"}>
      <Grid container spacing={3} style={{ width: "90%" }} direction={"column"}>
        <Grid item></Grid>

        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <Box
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

                      {/* </Container> */}

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
                        }}
                        onClick={() => addToCart(product)}
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
              </Box>
            ))}
          </Box>

          <Link href={"/checkout"}>
            <p>checkout</p>
          </Link>
          <Link href={"/cart"}>
            <p>cart</p>
          </Link>
        </Grid>
      </Grid>
    </Stack>
  );
}
