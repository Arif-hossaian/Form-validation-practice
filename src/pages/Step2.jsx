import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../components/MainContainer";
import Form from "../components/Form";
import { CustomeInput } from "../components/custom/CustomeInput";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { CardContent, Card } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useData } from "../context/DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomeButton from "../components/custom/CustomeButton";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
 
});
const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");
  const onSubmit = (data) => {
    history.push("/step3");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        ✨Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="outlined">
          <CardContent>
            <CustomeInput
              {...register("email")}
              type="email"
              label=" Enter Email"
              required
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
            {/* <FormControlLabel
              control={
                <Checkbox
                {...register("hasPhone")}
                  defaultValue={data.hasPhone}
                  defaultChecked={data.hasPhone}
                  color="primary"
                />
              }
              label="Do you have a phone"
            />
            {hasPhone && 
              
              <CustomeInput
              type="tel"
                {...register("phoneNumber")}
                label="Phone Number"
              />
             
            } */}
            <CustomeInput
              type="tel"
              {...register("phoneNumber")}
              label="Phone Number"
              onChange={(e) =>
                (e.target.value = normalizePhoneNumber(e.target.value))
              }
             
            />
            <CustomeButton>NEXT</CustomeButton>
          </CardContent>
        </Card>
      </Form>
    </MainContainer>
  );
};
