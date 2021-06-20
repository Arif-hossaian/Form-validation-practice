import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    //Hewader.jsx
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
  mainContainer: {
    //MainContainer.jsx
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    //Form.jsx
    width: "100%",
    marginTop: theme.spacing(1),
  },
  customButton: {
    //CustomeButton.jsx
    margin: theme.spacing(3, 0, 2),
  },
  customeFileInput: {
    //CustomeFileInput.jsx
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icon: {
    //CustomeFileInput.jsx
    marginTop: "16px",
    color: "#888888",
    fontSize: "42px",
  },
  tableContainer: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
}));
