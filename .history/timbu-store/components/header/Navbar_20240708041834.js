"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledTab = styled(Tab)(({ theme }) => ({
  flexDirection: "column-reverse",
  color: "inherit",
  "&.Mui-selected": {
    color: "inherit",
  },
}));

const Chip = styled(Box)(({ theme }) => ({
  padding: "2px 6px",
  borderRadius: "12px",
  fontSize: "0.75rem",
  backgroundColor: "#ED8174",
  color: theme.palette.primary.contrastText,
  marginBottom: "4px",
}));

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
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      <StyledTab
        label={
          <>
            <Chip>New</Chip>
            Shop
          </>
        }
      />
      <StyledTab label="Skincare" />
      <StyledTab label="Sets & Kits" />
      <StyledTab label="Make-up" />
      <StyledTab label="Shop by Concerns" />
    </Tabs>
  );
}
