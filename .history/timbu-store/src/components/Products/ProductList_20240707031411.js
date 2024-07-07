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

export default function ProductList() {
  return (
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
              <Stack alignItems={"center"}>
                <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
                  Sold
                </Typography>
                <div
                  style={{
                    width: "100%",
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
            </CardContent>
            <Box
              className="add-to-cart"
              sx={{
                backgroundColor: "#ED8174",
                color: "white",
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "50px", // Set your desired height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
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
