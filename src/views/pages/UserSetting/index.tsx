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
import FileUploader from "../../components/atoms/FileUploader";
import { UserData, UserDataForValidation } from "../../../data/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../../validations/user";
import { Controller, useForm } from "react-hook-form";
import { userDefaultForValidation } from "../../../data/defaultValues";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../../stores";
import { uploadUserIcon } from "../../../api/firebase/storage";
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
    control,
    formState: { isValid, errors, isDirty },
  } = useForm<UserDataForValidation>({
    mode: "onChange",
    defaultValues: userDefaultForValidation,
    shouldFocusError: true,
    resolver: yupResolver(yup.object().shape(userSchema)),
  });

  useEffect(() => {
    // バリデーション用のデータに整形する
    const newDataForValidation: UserDataForValidation = {
      ...userDataInStore,
      iconFile: null,
    };
    reset(newDataForValidation);
  }, [userDataInStore, reset]);

  const onRegister = useCallback(
    async (data: UserDataForValidation) => {
      const { iconFile, ...others } = data;
      // 保存用のデータに整形する
      const newData: UserData = {
        ...others,
      };
      if (iconFile) {
        await uploadUserIcon(iconFile, id);
      }
      await updateUser(id, newData).then(() => {
        dispatch(setUser(newData));
      });
    },
    [id, dispatch]
  );

  return (
    <>
      <Card
        sx={{
          width: "850px",
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
                <Controller
                  control={control}
                  name="iconFile"
                  render={({ field: { onChange } }) => (
                    <FileUploader defaultSrc={""} onChange={onChange} />
                  )}
                />
              </FieldWithStatusLabel>
            </Grid>
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
