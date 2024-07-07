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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
