import React from "react";
import {
  Box,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Filters() {
  const [availability, setAvailability] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        border: "1px solid red",
        width: "100%",
      }}
    >
      <Stack direction={"row"}>
        <Typography variant="body1" sx={{ color: "#473838" }}>
          Filter by:
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Select
            value={availability}
            onChange={handleAvailabilityChange}
            displayEmpty
            sx={{ minWidth: 120, color: "#473838" }}
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
            sx={{ minWidth: 120, color: "#473838" }}
          >
            <MenuItem value="" disabled>
              Price
            </MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
            <MenuItem value="highToLow">High to Low</MenuItem>
          </Select>
        </Box>
      </Stack>
      <Box>
        <IconButton>
          <SearchIcon sx={{ color: "#473838" }} />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon sx={{ color: "#473838" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
