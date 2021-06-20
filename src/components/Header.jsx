import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles/styles.js"
import { Link } from "react-router-dom";

const Header = () => {
    const styles = useStyles()
  return <Typography variant="h1" className={styles.header}><span component={Link} to="/">React-hook-form</span></Typography>;
};

export default Header;
