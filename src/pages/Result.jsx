import React, { useState } from "react";
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MainContainer from "../components/MainContainer";
import CustomeButton from "../components/custom/CustomeButton";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { InsertDriveFile } from "@material-ui/icons";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import useStyles from "../styles/styles.js";

const Result = () => {
  const styles = useStyles();
  const { data } = useData();
  const [success, setSuccess] = useState(false);
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;
  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });
    const res = await fetch("http://localhost:4000/", {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      Swal.fire("Great job!", "You've passed the challenge!", "success");
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form Values
      </Typography>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fields</TableCell>
              <TableCell align="right">Values</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell>{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            Form Values
          </Typography>
          <List>
            {files.map((f, index) => (
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
      <CustomeButton onClick={onSubmit}>Submit</CustomeButton>
      <Link to="/">Start over</Link>
    </MainContainer>
  );
};

export default Result;
