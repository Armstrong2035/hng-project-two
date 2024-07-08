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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
