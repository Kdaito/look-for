import React, { useCallback } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
  Step,
  StepLabel,
} from "@mui/material";

import Stepper from "@mui/material/Stepper";
import FieldWithStatusLabel from "../../../components/molecules/FieldWithStatusLabel";
import { useForm, FormProvider } from "react-hook-form";
import { Auth, User } from "../../../../data/type";
import { authDefault, userDefault } from "../../../../data/defaultValues";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userSchema } from "../../../../validations/user";
import { authSchema } from "../../../../validations/auth";

const steps = ["ログイン情報", "ユーザー情報", "アイコン登録"];

const SignUp: React.VFC = () => {
  const methods = useForm<User & Auth>({
    defaultValues: { ...userDefault, ...authDefault },
    mode: "onChange",
    resolver: yupResolver(yup.object().shape({ ...userSchema, ...authSchema })),
  });

  const { handleSubmit, register } = methods;

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onRegister = useCallback((data) => {
    console.log("register");
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
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Box sx={{ width: "100%" }} component="form" noValidate>
            <FormProvider {...methods}>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ mt: 6, mb: 3 }}>
                {activeStep === 0 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="required">
                        <TextField
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
                          fullWidth
                          label="パスワード"
                          type="password"
                          {...register("password")}
                          autoComplete="new-password"
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                  </Grid>
                )}
                {activeStep === 1 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="required">
                        <TextField
                          autoComplete="given-name"
                          {...register("firstName")}
                          fullWidth
                          label="お名前(姓)"
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="required">
                        <TextField
                          autoComplete="given-name"
                          {...register("firstNameKana")}
                          fullWidth
                          label="お名前(姓) ローマ字"
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="required">
                        <TextField
                          autoComplete="given-name"
                          {...register("lastName")}
                          fullWidth
                          label="お名前(名)"
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="required">
                        <TextField
                          fullWidth
                          label="お名前(名) ローマ字"
                          {...register("lastNameKana")}
                          autoComplete="family-name"
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <FieldWithStatusLabel status="optional">
                        <TextField
                          fullWidth
                          label="電話番号"
                          {...register("phoneNumber")}
                        />
                      </FieldWithStatusLabel>
                    </Grid>
                  </Grid>
                )}
                {activeStep === 2 && (
                  <Grid container spacing={2}>
                    <Typography>画像を選択してください</Typography>
                  </Grid>
                )}
              </Box>
              {activeStep === steps.length ? (
                <>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: "center" }}>
                    初期設定は以上です
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit(onRegister)}
                  >
                    登録する
                  </Button>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      pt: 2,
                    }}
                  >
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 3 }}
                      variant="contained"
                    >
                      戻る
                    </Button>
                    <Button onClick={handleNext} variant="contained">
                      {activeStep === steps.length - 1 ? "終了" : "次に進む"}
                    </Button>
                  </Box>
                </>
              )}
            </FormProvider>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
