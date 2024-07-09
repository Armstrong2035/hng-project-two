"use client";
import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import useStore from "@/store/store";

export default function Invoice() {
  const cart = useStore((state) => state.cart);

  const [discountCode, setDiscountCode] = useState("");
  const [shippingMode, setShippingMode] = useState("Home Delivery");
  const [price, setPrice] = useState("");

  const shippingModes = ["Home Delivery", "Pick up"];

  const shippingFee = () => {
    let fee = "";

    if (shippingMode === "Home Delivery") {
      fee = "$5";
    } else if (shippingMode === "Pick up") {
      fee = "$2";
    }

    setPrice(fee);
  };

  useEffect(() => {
    shippingFee();
  }, [shippingMode]);

  return (
    <Stack spacing={8}>
      <TextField
        variant="outlined"
        label="Discount"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography>{`Shipping fee:`}</Typography>

        <Typography>{`${price}`}</Typography>
      </Stack>

      <TextField
        select
        label="Shipping Mode"
        value={shippingMode}
        onChange={(e) => setShippingMode(e.target.value)}
      >
        {shippingModes.map((mode) => (
          <MenuItem key={mode} value={mode}>
            {mode}
          </MenuItem>
        ))}
      </TextField>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ border: "1px solid grey", padding: "10px 10px" }}
      >
        <Typography>Subtotal</Typography>
        <Typography>$500</Typography>
      </Stack>
    </Stack>
  );
}
