"use client";
import React from "react";
import { Grid } from "@mui/material";

export default function Invoice() {
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
