"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Rating,
  Button,
  Chip,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import ProductNav from "./ProductNav";
import Image from "next/image";
import ProductRecommendations from "./ProductRecommendations";

export default function Product({ product }) {
  const [orderVolume, setOrderVolume] = useState(1);
  return (
    <Container>
      <ProductNav />
      <Grid container direction="row">
        <Grid item lg={6} sm={12} xs={12}>
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
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Stack spacing={5}>
            <Stack direction={"row"} spacing={10}>
              <Chip
                label={"Sales"}
                sx={{
                  top: "0",
                  left: "0",
                  borderRadius: "0",
                  backgroundColor: "#EEE4E3",
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Rating name="read-only" value={product.rating} readOnly />
                <Typography>{`${product.rating}(5)`}</Typography>
              </Box>
            </Stack>

            <Stack direction={"row"} spacing={5}>
              <Typography>Lora Starter Kit</Typography>
              <Stack direction={"row"} spacing={2}>
                <Typography>$200</Typography>
                <Typography>$186</Typography>
              </Stack>

              <Typography>(You just saved $14)</Typography>
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <Box
                sx={{
                  border: "1px solid #B2A6A6",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <Button
                  sx={{ color: "#473838" }}
                  onClick={() =>
                    setOrderVolume(orderVolume > 1 ? orderVolume - 1 : 1)
                  }
                >
                  -
                </Button>
                <Typography sx={{ padding: "0 10px" }}>
                  {orderVolume}
                </Typography>
                <Button
                  sx={{ color: "#473838" }}
                  onClick={() => setOrderVolume(orderVolume + 1)}
                >
                  +
                </Button>
              </Box>
              <Button
                variant={"contained"}
                sx={{
                  height: "50px",
                  width: "454px",
                  backgroundColor: "#ED8174",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#C9675B",
                  },
                }}
              >
                Add to Cart
              </Button>
            </Stack>

            <Box>
              <Stack spacing={3}>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#EEE4E3" }}
                    expandIcon={<ExpandMoreOutlined />}
                  >
                    About Product
                  </AccordionSummary>
                  <AccordionDetails>{product.aboutProduct}</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#EEE4E3" }}
                    expandIcon={<ExpandMoreOutlined />}
                  >
                    How to use
                  </AccordionSummary>
                  <AccordionDetails>{product.howToUse}</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: "#EEE4E3" }}
                    expandIcon={<ExpandMoreOutlined />}
                  >
                    Reviews
                  </AccordionSummary>
                  <AccordionDetails>
                    {product.reviews.map((review, index) => (
                      <Stack direction={"row"} spacing={2} key={review.id}>
                        <Typography>{`${review.user}:`}</Typography>
                        <Typography>{`${review.comment}:`}</Typography>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <ProductRecommendations />
    </Container>
  );
}
