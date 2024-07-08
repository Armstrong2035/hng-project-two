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
      indicatorColor="secondary"
      sx={{ color: "#473838" }}
    >
      <Tab label="Shop" textColor="#473838" sx={{ color: "#473838" }} />
      <Tab label="Skincare" textColor="#473838" />
      <Tab label="Sets & Kits" textColor="#473838" />
      <Tab label="Make-up" textColor="#473838" />
      <Tab label="Shop by Concerns" />
    </Tabs>
  );
}
