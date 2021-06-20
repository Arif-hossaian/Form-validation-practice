import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import useStyles from "../../styles/styles.js";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CloudUpload from "@material-ui/icons/CloudUpload";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

export const CustomeFileInput = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: {onChange, onBlur, value} }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant="outlined"
                className={styles.customeFileInput}
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List >
            {value.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};
