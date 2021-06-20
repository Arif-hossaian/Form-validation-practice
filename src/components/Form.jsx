import React from "react";
import useStyles from "../styles/styles.js";

const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <form noValidate className={styles.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
