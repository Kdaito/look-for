import React from "react";
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

// TODO 別ファイルで定義する
const statusOptions = [
  {
    label: "公開",
    value: 0,
  },
  {
    label: "非公開",
    value: 1,
  },
];

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
              options={statusOptions}
              value={0}
              onChangeValue={() => ({})}
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
