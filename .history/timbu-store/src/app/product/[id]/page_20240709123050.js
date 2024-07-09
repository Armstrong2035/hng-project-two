"use client";

import React, { useState } from "react";

import { useParams } from "next/navigation";
import { inventory } from "@/products";
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
import Product from "../../../../components/Products/Product";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const [orderVolume, setOrderVolume] = useState(1);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Product product={product} />
    </>
  );
}
