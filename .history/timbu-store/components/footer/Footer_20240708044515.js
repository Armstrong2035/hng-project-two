import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";

function Footer() {
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            Timbu
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        style={{ marginTop: "2rem", backgroundColor: "#EEE4E3" }}
      >
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
              {["Shop", "Help", "Learn"].map((category, index) => (
                <Grid item xs={4} key={index}>
                  <Typography variant="h6" gutterBottom>
                    {category}
                  </Typography>
                  <Typography variant="body2">
                    {category === "Shop" &&
                      "Skincare\nSets & Kits\nMake-up\nShop by concern"}
                    {category === "Help" && "FAQ\nShipping\nRefunds"}
                    {category === "Learn" && "About Us\nBlog\nCareer"}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
