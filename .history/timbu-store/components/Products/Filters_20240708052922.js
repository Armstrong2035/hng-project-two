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
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Select label="Availability">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
