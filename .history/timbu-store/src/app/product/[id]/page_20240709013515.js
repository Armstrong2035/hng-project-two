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
  
  );
}
