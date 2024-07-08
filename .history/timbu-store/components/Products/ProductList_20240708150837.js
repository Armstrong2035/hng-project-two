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
      <Box>
        <Filters />
      </Box>
      <Grid container spacing={5} style={{ width: "90%" }}>
        {inventory.map((product, index) => (
          <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
            <Card
              sx={{
                position: "relative",
                "&:hover .add-to-cart": {
                  opacity: 1,
                },
              }}
            >
              <CardContent sx={{ backgroundColor: "#F1F0F0" }}>
                <Container>
                  <Stack alignItems={"center"}>
                    <Typography
                      variant="h6"
                      sx={{
                        alignSelf: "flex-start",
                        position: "absolute",
                        left: "0",
                        top: "0",
                      }}
                    >
                      Sold
                    </Typography>
                    <div
                      style={{
                        width: "300",
                        height: "300",
                        position: "relative",
                        padding: "16px",
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
                  </Stack>
                </Container>
              </CardContent>
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
            </Card>
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
          </Grid>
        ))}

        <Link href={"/checkout"}>
          <p>checkout</p>
        </Link>
      </Grid>
    </Stack>
  );
}
