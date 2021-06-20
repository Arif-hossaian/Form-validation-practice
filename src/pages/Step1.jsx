import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CustomeButton from "../components/custom/CustomeButton";
import { CustomeInput } from "../components/custom/CustomeInput";
import Form from "../components/Form";
import MainContainer from "../components/MainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../context/DataContext";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field")
    .min(2, "Please enter firstName minimum 2 characters")
    .max(12, "Maximum 10 characters are permitted"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(2, "Please enter firstName minimum 2 characters")
    .max(12, "Maximum 10 characters are permitted"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const onSubmit = (data) => {
    history.push("/step2");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        ✨Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="outlined">
          <CardContent>
            <CustomeInput
              {...register("firstName")}
              label="First Name"
              type="text"
              required
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
            />
            <CustomeInput
              {...register("lastName")}
              label="Last Name"
              type="text"
              required
              error={!!errors.lastName}
              helperText={errors?.lastName?.message}
            />
            <CustomeButton>Next</CustomeButton>
          </CardContent>
        </Card>
      </Form>
    </MainContainer>
  );
};
