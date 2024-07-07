"use client";
import React from "react";
import { Grid } from "@mui/material";
import useStore from "@/store/store";

export default function Invoice() {
  const cart = useStore((state) => state.cart);
  return (
    <>
      <Grid container>
        <Grid
          className={"invoice"}
          item
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
        ></Grid>
      </Grid>
    </>
  );
}
