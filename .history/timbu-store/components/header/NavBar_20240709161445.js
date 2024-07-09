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
        TabIndicatorProps={{
          style: {
            top: 0,
            bottom: "auto",
            backgroundColor: "#ED8174",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            color: "black",
            fontWeight: "normal",
          },
          "& .Mui-selected": {
            color: "#473838",
            fontWeight: "normal",
          },
        }}
      >
        <Tab
          label="Shop"
          sx={{
            color: " #473838",
            fontWeight: "normal",
          }}
        />
        <Tab
          label="Skincare"
          sx={{
            color: " #473838",
            fontWeight: "normal",
          }}
        />
        <Tab
          label="Sets & Kits"
          sx={{
            color: " #473838",
            fontWeight: "normal",
          }}
        />
        <Tab
          label="Make-up"
          sx={{
            color: " #473838",
            fontWeight: "normal",
          }}
        />
        <Tab
          label="Shop by Concerns"
          sx={{
            color: " #473838",
            fontWeight: "normal",
          }}
        />
      </Tabs>
    </Box>
  );
}
