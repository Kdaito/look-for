import React from "react";
import { Grid, TextField } from "@mui/material";
import FieldWithStatusLabel from "../../../molecules/FieldWithStatusLabel";
import { useFormContext } from "react-hook-form";
import { Auth } from "../../../../../data/type";

const EmailAndPassword: React.VFC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Auth>();

  return (
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
    </Grid>
  );
};

export default EmailAndPassword;
