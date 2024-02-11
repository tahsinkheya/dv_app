import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "../common/icons/DV LOGO 1-01.png";
import { useNavigate } from "react-router-dom";
import BasicMenu from "./MenuModal";
import { makeStyles } from "@mui/styles";
import { WindowRounded } from "@mui/icons-material";

const pages = ["Home", "Work" , "Services",  "Career", "Contact"];
const workMenu = ["Architecture", "Interior Design", "Acoustic Design"];
const useStyles = makeStyles(() => ({
  button: {
    display: "block",
    cursor: "pointer",
    height: "3rem",
    // marginTop:"2rem",
    "&:hover": {
      color: "red",
      // color: colors.buttonText,
    },
    "&:disabled": {
      // backgroundColor: colors.disabled,
    },
  },
}));

function TopBar() {
  let history = useNavigate();
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const subMenuClick = (item) => {
    handleCloseUserMenu();
    if (item === "Acoustic Design") {
      history(`/Acoustic`);
    }
  };
  function handleClicked(e, page) {
    // console.log(`/${page}`);
    if (page === "Work") {
      handleOpenUserMenu(e);
    } else {
      history(`/${page}`);
    }
  }

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          background: "lightgray",
          opacity: 0.5,
          marginTop: "0px",
          paddingTop: "0px",
          // backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Container
          maxWidth
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ width: "50%", textAlign: "left" }}>
            <img
              style={{
                height: "50px",
                width: "50px",
                paddingTop: "0.5rem",
                opacity: 1,
                // position: "absolute",
                left: "10px",
              }}
              src={logo}
            ></img>
          </div>

          {/* </Grid> */}

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
          {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
          {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Grid item xs={3} sm={3} md={3}></Grid> */}
          {/* <Grid item xs={5} sm={5} md={5} style={{ textAlign: "right" }}> */}
          <div
            style={{
              width: "50%",
              textAlign: "right",
              display: "flex",
              justifyContent: "end",
              // backgroundColor: "pink",
            }}
          >
            <Box
              sx={{
                // flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  textAlign: "right",
                  width: "fit-content",
                },
              }}
              style={{ right: "10px" }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => handleClicked(event, page)}
                  className={classes.button}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              style={{
                display: window.innerWidth > 500 ? "block" : "none",
              }}
            >
              {workMenu.map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => {
                    subMenuClick(item);
                  }}
                >
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
          {/* </Grid> */}

          {/* </Grid> */}
          {/* </Toolbar> */}
        </Container>
      </AppBar>
    </>
  );
}
export default TopBar;
