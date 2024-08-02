import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import { Link, useLocation } from "react-router-dom";

const pages = ["home", "contact", "about"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { pathname } = useLocation();

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="100vw">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <AccountCircleIcon fontSize="large" color="primary" />
            <Box
              sx={{
                mx: "32px",
                display: {
                  xs: "none",
                  md: "flex",
                },
                p: 0,
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "32px",
                overflow: "hidden",
              }}
            >
              {pages.map((page, key) => (
                <MenuItem
                  component={Link}
                  key={key}
                  onClick={handleCloseNavMenu}
                  to={page}
                  sx={{
                    p: "4px 20px",
                    display: "inline-block",
                    borderRadius: 0,
                    textTransform: "capitalize",
                    backgroundColor: pathname.includes(page)
                      ? "primary.main"
                      : "inherit",
                    color: pathname.includes(page)
                      ? "secondary.main"
                      : "inherit",
                    "&:hover": {
                      color: "#000",
                      backgroundColor: "#cdcdcd",
                    },
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              justifySelf: "flex-end",
              display: { xs: "none", md: "block" },
            }}
          >
            Login
          </Button>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "16px",
                width: "35px",
                height: "35px",
              }}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertSharpIcon fontSize="large" color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, key) => (
                <MenuItem key={key} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      textAlign: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
