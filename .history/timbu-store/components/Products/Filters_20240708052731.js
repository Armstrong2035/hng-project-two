"use client";

import React from "react";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import { Typography } from "@mui/material";

export default function Filters() {
  return (
    <>
      <Stack>
        <TuneSharpIcon />
        <Typography>Filter by:</Typography>
      </Stack>
    </>
  );
}
