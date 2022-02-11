import React, { useCallback } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  Typography,
  SxProps,
  TextField,
} from "@mui/material";
import FieldWithStatusLabel from "../../../components/molecules/FieldWithStatusLabel";
import { useForm } from "react-hook-form";
import { Auth, User } from "../../../../data/type";
import { authDefault, userDefault } from "../../../../data/defaultValues";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userSchema } from "../../../../validations/user";
import { authSchema } from "../../../../validations/auth";

const rootSx: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: 4,
};
const cardSx: SxProps = {
  marginTop: 8,
  padding: "50px 25px",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  width: "800px",
};
const formSx: SxProps = {
  width: "80%",
  margin: "0 auto",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
};

const SignUp: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Auth>({
    defaultValues: authDefault,
    mode: "onChange",
    resolver: yupResolver(yup.object().shape(authSchema)),
  });

  const onRegister = useCallback((data) => {
    console.log("register");
    console.log(data);
  }, []);

  return (
    <Box sx={rootSx}>
      <Card sx={cardSx}>
        <Box sx={formSx}>
          <Typography component="h1" variant="h4" color={"#fff"}>
            Look For
          </Typography>
          <Typography variant="subtitle1" color={"#fff"}>
            ユーザー登録
          </Typography>
          <Link
            href="/auth/sign-in"
            variant="body2"
            sx={{ margin: "10px 0 30px" }}
          >
            既に登録している方はこちら
          </Link>
          <Box sx={{ width: "60%" }} component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FieldWithStatusLabel status="required">
                  <TextField
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    label="メールアドレス"
                    {...register("email")}
                    autoComplete="email"
                  />
                </FieldWithStatusLabel>
              </Grid>
              <Grid item xs={12}>
                <FieldWithStatusLabel status="required">
                  <TextField
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    label="パスワード"
                    type="password"
                    {...register("password")}
                    autoComplete="new-password"
                  />
                </FieldWithStatusLabel>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                disabled={!isValid}
                sx={{ mt: 3, mb: 8 }}
                onClick={handleSubmit(onRegister)}
              >
                登録する
              </Button>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
