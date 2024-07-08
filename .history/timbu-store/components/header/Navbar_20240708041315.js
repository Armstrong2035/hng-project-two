"use client";
import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";

export default function SimpleTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Tab label="Shop" />
      <Tab label="Skincare" />
      <Tab label="Sets & Kits" />
      <Tab label="Make-up" />
      <Tab label="Shop by Concerns" />
    </Tabs>
  );
}
