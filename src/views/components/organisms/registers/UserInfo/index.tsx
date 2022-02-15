import React from "react";
import { Grid, TextField } from "@mui/material";
import FieldWithStatusLabel from "../../../molecules/FieldWithStatusLabel";
import { useFormContext } from "react-hook-form";
import { UserData } from "../../../../../data/type";

const UserInfo: React.VFC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserData>();

  return (
    <Grid container spacing={2}>
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
        <FieldWithStatusLabel status="optional">
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
  );
};

export default UserInfo;
