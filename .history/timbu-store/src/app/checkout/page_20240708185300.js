"use client";

import React from "react";
import CheckOut from "../../../components/checkout/CheckOut";
import Promotion from "../../../components/header/Promotion";
import { AppBar } from "@mui/material";
import TimbuStore from "../../../components/header/TimbuStore";

export default function Page() {
  return (
    <>
      <AppBar color={"transparent"}>
        <Promotion />
        <TimbuStore />
      </AppBar>

      <Box sx={{ mt: 4 }}>
        <CheckOut />
      </Box>
    </>
  );
}
