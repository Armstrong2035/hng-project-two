"use client";
import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

export default function SimpleTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
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

      <TabPanel value={value} index={0}>
        Shop Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Skincare Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Sets & Kits Content
      </TabPanel>
      <TabPanel value={value} index={3}>
        Make-up Content
      </TabPanel>
      <TabPanel value={value} index={4}>
        Shop by Concerns Content
      </TabPanel>
    </Box>
  );
}
