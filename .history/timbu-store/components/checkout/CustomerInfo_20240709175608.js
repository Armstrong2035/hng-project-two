"use client";
import {
  Box,
  Typography,
  Stack,
  TextField,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

import React from "react";

export default function CustomerInfo() {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ backgroundColor: "#EEE4E3", p: 2, mb: 2 }}
        >
          Delivery
        </Typography>
        <Stack spacing={2}>
          <TextField fullWidth label="First Name" variant="outlined" />
          <TextField fullWidth label="Last Name" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField fullWidth label="Phone" variant="outlined" />
          <TextField fullWidth label="Address" variant="outlined" />
        </Stack>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ backgroundColor: "#EEE4E3", p: 2, mb: 2 }}
        >
          Payment
        </Typography>
        <Typography>Choose your payment method</Typography>
        <RadioGroup defaultValue="creditCard">
          <FormControlLabel
            value="creditCard"
            control={<Radio />}
            label="Credit Card"
          />
          <FormControlLabel
            value="transfer"
            control={<Radio />}
            label="Transfer"
          />
        </RadioGroup>
        <TextField
          fullWidth
          label="Card Number"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <TextField label="CVV" variant="outlined" />
          <TextField label="Expiry Date" variant="outlined" />
        </Box>
      </Box>
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#ED8174",
          "&:hover": { backgroundColor: "#D3726A" },
        }}
      >
        Pay Now
      </Button>
    </>
  );
}
