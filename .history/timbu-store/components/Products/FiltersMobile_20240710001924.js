import { Filter } from "@mui/icons-material";
import React, { useState } from "react";
import { Typography, IconButton, MenuIcon, Popover } from "@mui/material";

const FiltersMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography>Mobile Filters</Typography>
      <IconButton
        onClick={handleClick}
        sx={{
          p: 0,
          ...(Boolean(anchorEl) && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
            },
          }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography>Shop all</Typography>
        <Typography>Skin care</Typography>
        <Typography>Sets and kits</Typography>
        <Typography>Make ups</Typography>
        <Typography>Shop by concern</Typography>
      </Popover>
    </>
  );
};

export default FiltersMobile;
