import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Auth } from "../../../../data/type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../../../validations/auth";
import { authDefault } from "../../../../data/defaultValues";
import { signInWithEmailAndPassword } from "../../../../api/firebase/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../stores";
import { setAuth } from "../../../../stores/auth";
import { pathNames } from "../../../../routers/path";

const SignIn: React.VFC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Auth>({
    mode: "onChange",
    defaultValues: authDefault,
    shouldFocusError: true,
    resolver: yupResolver(yup.object().shape(authSchema)),
  });

  const onRegister = useCallback(
    (data: Auth) => {
      signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          dispatch(
            setAuth({
              id: userCredential.user.uid,
              email: userCredential.user.email || "",
              auth: true,
            })
          );
          history.push(pathNames.main);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              setErrorMessage(
                "メールアドレスまたはパスワードが正しくありません。"
              );
              break;
            case "auth/wrong-password":
              setErrorMessage("パスワードが正しくありません。");
              break;
            default:
              setErrorMessage("ログインに失敗しました。");
              break;
          }
        });
    },
    [history, dispatch]
  );

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
        {errorMessage !== "" && <Typography>{errorMessage}</Typography>}
        <Box
          sx={{ mt: 3, width: "60%", maxWidth: "400px" }}
          component="form"
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                label="メールアドレス"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                label="パスワード"
                type="password"
                {...register("password")}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(onRegister)}
            sx={{ mt: 4, mb: 8 }}
            disabled={!isValid}
          >
            ログインする
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                onClick={() => history.push(pathNames.signUp)}
                variant="body2"
              >
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
