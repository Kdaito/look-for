import React, { useCallback } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Auth } from "../../../../data/type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../../../validations/auth";
import { authDefault } from "../../../../data/defaultValues";

const SignIn: React.VFC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm<Auth>({
    mode: "onChange",
    defaultValues: authDefault,
    shouldFocusError: true,
    resolver: yupResolver(yup.object().shape(authSchema)),
  });

  const onRegister = useCallback((data: Auth) => {
    console.log(data);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Card
        sx={{
          marginTop: 8,
          padding: "50px 25px",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          width: "800px",
        }}
      >
        <Typography component="h1" variant="h4" color={"#fff"} mb={"15px"}>
          Look For
        </Typography>
        <Typography component="h2" variant="subtitle1" color={"#fff"}>
          ユーザーログイン
        </Typography>
        <Box sx={{ mt: 3, width: "60%" }} component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                label="Email Address"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                label="Password"
                type="password"
                {...register("password")}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(onRegister)}
            sx={{ mt: 3, mb: 2 }}
          >
            ログインする
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/auth/sign-up" variant="body2">
                まだ登録していない方はこちら
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;
