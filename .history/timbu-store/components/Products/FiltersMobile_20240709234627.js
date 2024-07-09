"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, Typography, Popover } from "@mui/material";
import { IconButton } from "@mui/material";

const FiltersMobile = () => {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpenPopover(!openPopover)}
        sx={{
          p: 0,
          ...(openPopover && {
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
        open={openPopover}
        anchorEl={openPopover}
        onClose={() => setOpenPopover(false)}
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
