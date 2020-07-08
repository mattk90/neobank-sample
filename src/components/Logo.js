import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
  logo: {
    height: "30px",
    marginTop: "40px"
  }
}));

const Logo = () => {
  const classes = useStyles();

  return <img className={classes.logo} src={logo} alt="" />;
};

export default Logo;
