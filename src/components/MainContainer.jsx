import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "../styles/styles.js";

const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container
      component="main"
      maxWidth="sm"
      className={styles.mainContainer}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
