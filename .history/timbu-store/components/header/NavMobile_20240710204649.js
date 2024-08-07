import React, { useState } from "react";
import { Menu, Typography, Popover, Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        <Stack spacing={1} direction={"column"}>
          <Typography>Shop all</Typography>
          <Typography>Skin care</Typography>
          <Typography>Sets and kits</Typography>
          <Typography>Make ups</Typography>
          <Typography>Shop by concern</Typography>
        </Stack>
      </Popover>
    </>
  );
};

export default NavMobile;
