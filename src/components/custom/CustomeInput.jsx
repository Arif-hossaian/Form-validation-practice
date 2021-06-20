import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const CustomeInput = forwardRef((props, ref) => {
  return (
    <TextField
      variant="standard"
      margin="normal"
      required={true}
      fullWidth
      inputRef={ref}
      {...props}
    />
  );
});
