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
import Image from "next/image";

export default function Product({ product }) {
  const [orderVolume, setOrderVolume] = useState(1);
  return (
    <Container>
      <Grid container direction="row">
        <Grid item lg={6}>
          <Box
            sx={{
              width: "506px",
              height: "618.29px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1F0F0",
            }}
          >
            <div style={{ width: "421px", height: "520px" }}>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Box>
        </Grid>
        <Grid item lg={6}>
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
              <Stack direction={"row"}>
                <Typography>$200</Typography>
                <Typography>$186</Typography>
              </Stack>

              <Typography>(You just saved $14)</Typography>
            </Stack>

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
              <Typography sx={{ padding: "0 10px" }}>{orderVolume}</Typography>
              <Button
                sx={{ color: "#473838" }}
                onClick={() => setOrderVolume(orderVolume + 1)}
              >
                +
              </Button>

              <Button>Checkout</Button>
            </Box>

            <Box>
              <Stack spacing={3}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    About Product
                  </AccordionSummary>
                  <AccordionDetails>{product.aboutProduct}</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    How to use
                  </AccordionSummary>
                  <AccordionDetails>{product.howToUse}</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    Reviews
                  </AccordionSummary>
                  <AccordionDetails>
                    {product.reviews.map((review) => (
                      <div>
                        <Typography>{`${review.user}:`}</Typography>
                        <Typography>{`${review.comment}:`}</Typography>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
