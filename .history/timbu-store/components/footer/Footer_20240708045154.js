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
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Join our Family
              </Typography>
              <Typography variant="body1" paragraph>
                You know you want to sign up for our newsletter and receive 10%
                off your first purchase! Be the first to hear about our new
                product launches, tips & tricks and juicy sales.
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your mail"
                style={{ marginBottom: "1rem" }}
              />
              <Button variant="contained" color="secondary" fullWidth>
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item>
                  <Stack>
                    <Typography>Skincare</Typography>
                    <Typography>Sets and Kits</Typography>
                    <Typography>Make up</Typography>
                    <Typography>Shop by concer</Typography>
                  </Stack>
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
