import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <AppBar className="wp__navbar" position="static" color="primary">
      <Toolbar>
        <img className="wp__logo" src={logo} alt="logo"/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cold Conditions, Safe Decisions
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/tiktoks">
          TikToks
        </Button>
        {/* <Button color="inherit" component={Link} to="/instructions">
          Instructions
        </Button> */}
        <Button color="inherit" component={Link} to="/about-us">
          About Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
