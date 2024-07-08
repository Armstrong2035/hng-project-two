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
      <Stack>
        <TuneSharpIcon />
        <Typography>Filter by:</Typography>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Select label="Availability">
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
