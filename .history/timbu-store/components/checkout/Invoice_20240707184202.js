"use client";
import React from "react";
import { FormGroup, Grid } from "@mui/material";
import useStore from "@/store/store";

export default function Invoice() {
  const cart = useStore((state) => state.cart);

  const [discountCode, setDiscountCode] = useState('')


  return (
    <>
      <Grid container>
        <Grid
          className={"invoice"}
          item
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
        >
        <Stack>
            <FormGroup>
                <Inp
            </FormGroup>
        </Stack>


        </Grid>
      </Grid>
    </>
  );
}
