import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "../../styles/styles.js";

const CustomeButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={styles.customButton}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomeButton;
