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
import ProductRecommendationsMobile from "./ProductRecommendationsMobile";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useStore from "@/store/store";

export default function Product({ product }) {
  const [orderVolume, setOrderVolume] = useState(1);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const addToCart = useStore((state) => state.addToCart);

  const font1 = {
    fontFamily: "Kanit",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "0.005em",
    textAlign: "center",
  };
  const font2 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "24px",
    lingHeight: "32px",
    color: "#473838",
  };

  const font3 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lingHeight: "26px",
    color: "#473838",
  };

  return (
    <Container>
      <ProductNav />
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1F0F0",
              position: "relative",
              "&:hover": {
                backgroundColor: "#E6DFDF",
              },
              width: "100%", // Changed from fixed width
              paddingTop: "100%", // This creates a square aspect ratio
              margin: { xs: "0 auto", lg: "0" }, // Center on small screens
              maxWidth: { xs: "100%", sm: "506px" }, // Max width on larger screens
            }}
            elevation={"none"}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Image
                src={product.imageUrl}
                alt={`${product.productName}`}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
          {/* <Box
            sx={{
              width: { xs: "100%", lg: "506px" },
              height: { xs: "auto", lg: "618.29px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1F0F0",
              border: "1px solid red",
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Box> */}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack spacing={5}>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Chip
                label={"Sales"}
                sx={{
                  borderRadius: "0",
                  backgroundColor: "#EEE4E3",
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating name="read-only" value={product.rating} readOnly />
                <Typography>{`${product.rating}(5)`}</Typography>
              </Box>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems="center">
              <Typography variant="h6">{product.productName}</Typography>
              <Stack direction={"row"} spacing={2} alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "line-through" }}
                >
                  $200
                </Typography>
                <Typography variant="body1" sx={{ color: "red" }}>
                  $186
                </Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems="center">
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
                  width: "100%",
                  maxWidth: "454px",
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
                        <Typography>{review.comment}</Typography>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      {isDesktop ? (
        <ProductRecommendations />
      ) : (
        <ProductRecommendationsMobile />
      )}
    </Container>
  );
}
