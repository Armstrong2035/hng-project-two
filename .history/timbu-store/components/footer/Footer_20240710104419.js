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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const font1 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lingHeight: "26px",
    color: "#473838",
  };
  const font2 = {
    fontFamily: "Kanit sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "24px",
    lingHeight: "32px",
    color: "#473838",
  };
  return (
    <>
      <TimbuStore />
      <Box
        sx={{
          inTop: "2rem",
          backgroundColor: "#EEE4E3",
          padding: "30px",
        }}
      >
        <Grid container>
          <Grid item sm={12} lg={6}>
            <Stack>
              <Typography variant="h5" gutterBottom sx={font2}>
                Join our Family
              </Typography>
              <Typography variant="body1" paragraph sx={font1}>
                You know you want to sign up for our newsletter and receive 10%
                off your first purchase! Be the first to hear about our new
                product launches, tips & tricks and juicy sales.
              </Typography>
            </Stack>
          </Grid>

          <Grid item sm={12} lg={6}>
            <Grid container direction={isDesktop ? "row" : "column"}>
              <Grid item sm={12} lg={4}>
                <Stack>
                  <Typography variant={"h5"} sx={font2}>
                    Shop
                  </Typography>
                  <Typography sx={font1}>Skincare</Typography>
                  <Typography sx={font1}>Sets and Kits</Typography>
                  <Typography sx={font1}>Make up</Typography>
                  <Typography sx={font1}>Shop by concer</Typography>
                </Stack>
              </Grid>
              <Grid item sm={12} lg={4}>
                <Stack>
                  <Typography variant={"h5"} sx={font2}>
                    Help
                  </Typography>
                  <Typography sx={font1}>FAQ</Typography>
                  <Typography sx={font1}>Shipping</Typography>
                  <Typography sx={font1}>Refunds</Typography>
                </Stack>
              </Grid>
              <Grid item sm={12} lg={4}>
                <Stack>
                  <Typography variant={"h5"} sx={font2}>
                    Learn
                  </Typography>
                  <Typography sx={font1}>About us</Typography>
                  <Typography sx={font1}>Career</Typography>
                  <Typography sx={font1}>Blog</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
