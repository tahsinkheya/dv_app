import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu({ openMenu, handleClose }) {
  //   const [anchorEl, setAnchorEl] = React.useState(newAnchorEl);
  const open = Boolean(openMenu);
  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //     console.log(event.currentTarget)
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  return (
    <div style={{ paddingLeft: "10rem" }}>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <Menu
        id="basic-menu"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
