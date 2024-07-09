"use client";

import { useParams } from "next/navigation";
import { inventory } from "@/products";
import { Box, Stack, Typography, Rating, Button } from "@mui/material";
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
        <Box id={"small widgets"}></Box>
        <Box>
          <Stack>
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
              <div
                style={{
                  width: "300",
                  height: "300",
                  position: "relative",
                  padding: "10px, 10px",
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  layout="responsive"
                  width={500}
                  height={500}
                  objectFit="contain"
                />
              </div>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
