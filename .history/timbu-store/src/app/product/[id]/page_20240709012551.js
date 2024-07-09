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
    <Stack alignItems={"center"} sx={{ padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F1F0F0",
          width: "100%",
          maxWidth: "600px",
          padding: 3,
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
        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="h4">{product.productName}</Typography>
          <Rating name="read-only" value={product.rating} readOnly />
          <Typography>{`Rating: ${product.rating}(5)`}</Typography>
          <Typography variant="h5">{`Price: ${product.price}`}</Typography>
          <Typography variant="h5" sx={{ color: "#F7AFBC" }}>
            {`Discount Price: ${product.discountPrice}`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Add to Cart")}
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
