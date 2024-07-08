import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";

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
        TabIndicatorProps={{
          style: {
            top: 0,
            bottom: "auto",
            backgroundColor: "#ED8174",
          },
        }}
      >
        <Tab label="Shop" />
        <Tab label="Skincare" />
        <Tab label="Sets & Kits" />
        <Tab label="Make-up" />
        <Tab label="Shop by Concerns" />
      </Tabs>
    </Box>
  );
}
