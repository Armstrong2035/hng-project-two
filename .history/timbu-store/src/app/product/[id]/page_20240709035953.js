"use client";

import { useParams } from "next/navigation";
import { inventory } from "@/products";
import { Box, Stack, Typography, Rating, Button, Chip } from "@mui/material";
import Image from "next/image";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Stack>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1F0F0",
              width: "300",
              height: "300",
            }}
            elevation={"none"}
          >
            <div>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Box>

          <Box>
            <Stack>
              <Box>
                <Chip
                  label="Sale"
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderRadius: "0",
                    backgroundColor: "#EEE4E3",
                  }}
                />
              </Box>
              <Box>product name</Box>
              <Box>add to cart</Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
