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
import TimbuStore from "../header/TimbuStore";

function Footer() {
  return (
    <>
      <TimbuStore />
      <Box
        sx={{
          inTop: "2rem",
          backgroundColor: "#EEE4E3",
          height: "230px",
        }}
      >
        <Grid container>
          <Grid item>
            <Stack>
              <Typography variant="h5" gutterBottom>
                Join our Family
              </Typography>
              <Typography variant="body1" paragraph>
                You know you want to sign up for our newsletter and receive 10%
                off your first purchase! Be the first to hear about our new
                product launches, tips & tricks and juicy sales.
              </Typography>
            </Stack>
          </Grid>

          <Stack direction={"row"} spacing={10}>
            <Stack>
              <Typography variant={"h5"}>Shop</Typography>
              <Typography>Skincare</Typography>
              <Typography>Sets and Kits</Typography>
              <Typography>Make up</Typography>
              <Typography>Shop by concer</Typography>
            </Stack>
            <Stack>
              <Typography variant={"h5"}>Help</Typography>
              <Typography>FAQ</Typography>
              <Typography>Shipping</Typography>
              <Typography>Refunds</Typography>
            </Stack>
            <Stack>
              <Typography variant={"h5"}>Learn</Typography>
              <Typography>About us</Typography>
              <Typography>Career</Typography>
              <Typography>Blog</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
