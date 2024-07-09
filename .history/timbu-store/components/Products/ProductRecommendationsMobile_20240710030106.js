"use client";
import React from "react";
import { inventory } from "@/products";
import Carousel from "react-material-ui-carousel";

const theme = useTheme();
const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
