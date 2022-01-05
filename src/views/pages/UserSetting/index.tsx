import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import Field from "../../components/molecules/Field";
import DateRangeField from "../../components/molecules/DateRangeField";
import Select from "../../components/atoms/Select";
import { status } from "../../../options";

const RegisterRequirement: React.VFC = () => {
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
          <Field label="名前もしくは団体名">
            <TextField variant="outlined" sx={{ width: "300px" }} />
          </Field>
          <Field label="名前もしくは団体名(かな)">
            <TextField variant="outlined" sx={{ width: "300px" }} />
          </Field>
          <Field label="email">
            <TextField variant="outlined" sx={{ width: "300px" }} />
          </Field>
          <Field label="電話番号">
            <TextField variant="outlined" sx={{ width: "300px" }} />
          </Field>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "25px auto 65px" }}
            fullWidth
            size="large"
          >
            登録する
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RegisterRequirement;
