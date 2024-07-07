"use client";
import useStore from "@/store/store";
import Image from "next/image";
import {
  Typography,
  Box,
  Stack,
  Grid,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Cart from "./Cart";
import Invoice from "./Invoice";

export default function CheckOut() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#FAF3F0" }}>
      <Typography
        sx={{
          backgroundColor: "#EEE4E3",
          textAlign: "center",
          padding: "10px",
        }}
      >
        FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
      </Typography>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography variant="h5" sx={{ color: "#ED8174" }}>
            Timbu
          </Typography>
          <Box component="span" sx={{ cursor: "pointer" }}>
            🛒
          </Box>
        </Box>

        {isMobile && (
          <Box
            sx={{ backgroundColor: "#FAC7BD", p: 2, mb: 2, borderRadius: 1 }}
          >
            <Typography variant="h6">
              Radiant beauty for every skin glow
            </Typography>
            <Typography>
              Inclusive skincare for every complexion, from light to deep
            </Typography>
          </Box>
        )}

        <Typography
          variant="h6"
          sx={{ backgroundColor: "#EEE4E3", p: 2, mb: 2 }}
        >
          Order Summary
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Cart />
          </Grid>
          <Grid item xs={12} md={4}>
            <Invoice />
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
