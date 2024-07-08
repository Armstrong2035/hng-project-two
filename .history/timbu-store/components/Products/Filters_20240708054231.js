"use client";

import React from "react";
import TuneSharpIcon from "@mui/icons-material/TuneSharp.js";
import {
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function Filters() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <TuneSharpIcon />
        <Typography>Filter by:</Typography>
        <FormControl>
          <Typography>Availability</Typography>
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem>Thirty</MenuItem>
        </FormControl>
      </Stack>
    </>
  );
}
