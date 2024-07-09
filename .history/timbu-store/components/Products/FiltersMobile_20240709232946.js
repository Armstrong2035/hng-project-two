"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import React, { useState } from "react";

export default function FiltersMobile() {
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        ></Popover>
      </IconButton>
    </>
  );
}
