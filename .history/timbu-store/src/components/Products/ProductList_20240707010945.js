"use client";
import Image from "next/image";
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
import React from "react";

const palette = {
  background: {
    default: "#f8f8f8",
    accent: "#f18080",
  },
  display: {
    main: "#f7AFBC",
  },
  button: {
    primary: "#ED8174",
    secondary: "#EEE4E3",
  },
  text: {
    primary: "#473838",
    secondary: "#F7AFBC",
    tertiary: "#9B9B9B",
  },
};

export default function ProductList() {
  return (
    <Grid container spacing={5} style={{ width: "90%" }}>
      {inventory.map((product, index) => (
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={index}>
          <Card>
            <CardContent sx={{ backgroundColor: "#F1F0F0" }}>
              <Stack alignItems={"center"}>
                <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
                  Sold
                </Typography>
                <Box
                  sx={{ position: "relative", width: "100%", height: "100%" }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    layout="intrinsic"
                    objectFit="contain"
                  />
                  <Box
                    size={"large"}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#ED8174",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    Add To Cart
                  </Box>
                </Box>
              </Stack>
            </CardContent>
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
    </Grid>
  );
}

// <Box
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "30px",
//             }}
//           >
//             <div
//               style={{
//                 width: "340px",
//                 height: "340px",
//                 position: "relative",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#F1F0F0",
//               }}
//             >
//               <Stack>
//                 <div style={{ alignSelf: "flex-start" }}>
//                   <p
//                     style={{
//                       backgroundColor: "#EEE4E3",
//                     }}
//                   >
//                     save 14%
//                   </p>
//                 </div>

//                 <Image
//                   src={product.imageUrl}
//                   alt={product.productName}
//                   layout="intrinsic"
//                   objectFit="contain"
//                 />
//               </Stack>
//             </div>
//           </Box>
