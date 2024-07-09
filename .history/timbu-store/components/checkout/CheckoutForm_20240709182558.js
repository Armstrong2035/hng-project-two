"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} direction={"column"}>
        <Box>
          <Typography>Delivery</Typography>
        </Box>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
        />

        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <TextField
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          type="number"
          inputProps={{ minLength: 16, maxLength: 19 }}
          required
        />

        <TextField
          label="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          type="password"
          inputProps={{ minLength: 3, maxLength: 4 }}
          required
        />

        <TextField
          label="Expiry Date (MM/YY)"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          helperText="Please enter in MM/YY format"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#ED8174",
            "&:hover": {
              backgroundColor: "#C9675B",
            },
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
