import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
  Box,
  Stack,
} from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          backgroundColor: "#EEE4E3",
          width: "100%",
        }}
      >
        <Container>
          <Stack>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Join our Family
              </Typography>
              <Typography variant="body1" paragraph>
                You know you want to sign up for our newsletter and receive 10%
                off your first purchase! Be the first to hear about our new
                product launches, tips & tricks and juicy sales.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={5}>
                <Grid item>
                  <Stack spacing={2}>
                    <Typography variant={"h5"}>Shop</Typography>
                    <Typography>Skincare</Typography>
                    <Typography>Sets and Kits</Typography>
                    <Typography>Make up</Typography>
                    <Typography>Shop by concer</Typography>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack spacing={2}>
                    <Typography variant={"h5"}>Help</Typography>
                    <Typography>FAQ</Typography>
                    <Typography>Shipping</Typography>
                    <Typography>Refunds</Typography>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack spacing={2}>
                    <Typography variant={"h5"}>Learn</Typography>
                    <Typography>About us</Typography>
                    <Typography>Career</Typography>
                    <Typography>Blog</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
