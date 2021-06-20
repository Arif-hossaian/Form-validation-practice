import React from "react";
import MainContainer from "../components/MainContainer";
import { Typography } from "@material-ui/core";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useData } from "../context/DataContext";
import CustomeButton from "../components/custom/CustomeButton";
import { CustomeFileInput } from "../components/custom/CustomeFileInput";


export const Step3 = () => {
  const { data, setValues } = useData();
  const history = useHistory();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        ✨Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CustomeFileInput name="files" control={control}/>
        <CustomeButton>NEXT</CustomeButton>
      </Form>
    </MainContainer>
  );
};
