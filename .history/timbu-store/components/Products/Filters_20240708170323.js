import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function FilterBar() {
  const [availability, setAvailability] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ width: "100%" }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="body1" sx={{ color: "#473838", marginRight: 2 }}>
            Filter by :
          </Typography>
          <Select
            value={availability}
            onChange={handleAvailabilityChange}
            displayEmpty
            sx={{ marginRight: 2, minWidth: 120, color: "#473838" }}
          >
            <MenuItem value="" disabled>
              Availability
            </MenuItem>
            <MenuItem value="inStock">In Stock</MenuItem>
            <MenuItem value="outOfStock">Out of Stock</MenuItem>
          </Select>
          <Select
            value={price}
            onChange={handlePriceChange}
            displayEmpty
            sx={{ marginRight: 2, minWidth: 120, color: "#473838" }}
          >
            <MenuItem value="" disabled>
              Price
            </MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
            <MenuItem value="highToLow">High to Low</MenuItem>
          </Select>
        </Box>
        <Box>
          <IconButton>
            <SearchIcon sx={{ color: "#473838" }} />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon sx={{ color: "#473838" }} />
          </IconButton>
        </Box>
      </Stack>
    </AppBar>
  );
}
