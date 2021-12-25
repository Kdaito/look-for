import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import Field from "../../components/molecules/Field";

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
          <Field label="公開ステータス">
            <TextField variant="outlined" fullWidth />
          </Field>
          <Field label="募集内容">
            <TextField variant="outlined" fullWidth multiline rows={8} />
          </Field>
          <Field label="募集期間">date</Field>
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
            sx={{ margin: "0 auto 15px" }}
          >
            登録する
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RegisterRequirement;
