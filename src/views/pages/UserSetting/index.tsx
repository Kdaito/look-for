import React, { useCallback, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import FieldWithStatusLabel from "../../components/molecules/FieldWithStatusLabel";
import { UserData } from "../../../data/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../../validations/user";
import { useForm } from "react-hook-form";
import { userDefault } from "../../../data/defaultValues";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../../stores";
import { updateUser } from "../../../api/firebase/firestore/user";
import { setUser } from "../../../stores/user";

const RegisterRequirement: React.VFC = () => {
  const userDataInStore = useSelector((s: State) => s.user);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useSelector((s: State) => s.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm<UserData>({
    mode: "onChange",
    defaultValues: userDefault,
    shouldFocusError: true,
    resolver: yupResolver(yup.object().shape(userSchema)),
  });

  useEffect(() => {
    console.log("storeが更新されました");
    reset(userDataInStore);
  }, [userDataInStore, reset]);

  const onRegister = useCallback(
    async (data: UserData) => {
      await updateUser(id, data).then(() => {
        dispatch(setUser(data));
      });
    },
    [id, dispatch]
  );

  return (
    <>
      <Card
        sx={{
          width: "80%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{ margin: "40px auto 0", width: "65%" }}
          >
            <Grid item xs={12}>
              <FieldWithStatusLabel status="required">
                <TextField
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
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
                  error={!!errors.firstNameKana}
                  helperText={errors.firstNameKana?.message}
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
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
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
                  error={!!errors.lastNameKana}
                  helperText={errors.lastNameKana?.message}
                  fullWidth
                  label="お名前(名) ローマ字"
                  {...register("lastNameKana")}
                  autoComplete="family-name"
                />
              </FieldWithStatusLabel>
            </Grid>
            <Grid item xs={12}>
              <FieldWithStatusLabel status="required">
                <TextField
                  fullWidth
                  label="電話番号"
                  {...register("phoneNumber")}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              </FieldWithStatusLabel>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "25px auto 85px", width: "400px" }}
            size="large"
            disabled={!isValid || !isDirty}
            onClick={handleSubmit(onRegister)}
          >
            登録する
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RegisterRequirement;
