"use client";
import React from "react";
import { FormGroup, Grid, TextField, Typography } from "@mui/material";
import useStore from "@/store/store";

export default function Invoice() {
  const cart = useStore((state) => state.cart);

  const [discountCode, setDiscountCode] = useState("");
  const [shippingMode, setShippingMode] = useState("Home Delivery");
  const [price, setPrice] = useState("");

  const shippingFee = () => {
    const price = "";

    if (shippingMode == "Home Delivery") {
      price = "$5";
    }
    if (shippingMode == "Pick up") {
      price = "$2";
    }

    setPrice(price);
  };

  return (
    <>
      <Grid container>
        <Grid className={"invoice"} item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Stack>
            <FormGroup>
              <TextField variant="outlined" label="discount" />
              <Typography>{`shipping fee`}</Typography>
              <TextField variant="outlined" label="discount" />
            </FormGroup>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
