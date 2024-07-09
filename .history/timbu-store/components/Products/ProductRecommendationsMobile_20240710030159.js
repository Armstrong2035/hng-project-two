"use client";
import React from "react";
import { inventory } from "@/products";
import Carousel from "react-material-ui-carousel";
import {
  Container,
  Grid,
  Box,
  Chip,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useTheme from "@mui/material";
import useMediaQuery from "@mui/material";

export default function ProductRecommendationsMobile() {
  const recommendations = inventory.slice(0, 4);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
}
