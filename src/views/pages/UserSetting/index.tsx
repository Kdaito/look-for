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
          <Field label="タイトル">
            <TextField variant="outlined" fullWidth />
          </Field>
          <Field label="募集内容">
            <TextField variant="outlined" fullWidth multiline rows={8} />
          </Field>
          <Field label="公開ステータス">
            <Select
              label="公開ステータス"
              options={status.options}
              value={null}
              onChangeValue={(value) => console.log(value)}
            />
          </Field>
          <Field label="募集期間">
            <DateRangeField
              startDate={null}
              endDate={null}
              setStartDate={() => ({})}
              setEndDate={() => ({})}
            />
          </Field>
          <Field label="Email(連絡先)">
            <TextField variant="outlined" sx={{ width: "300px" }} />
          </Field>
          <Field label="電話番号(連絡先)">
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
