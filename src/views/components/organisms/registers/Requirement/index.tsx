import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import Field from "../../../molecules/Field";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { requirementSchema } from "../../../../../validations/requirement";
import DateRangeField from "../../../molecules/DateRangeField";
import Select from "../../../atoms/Select";
import ErrorMessage from "../../../molecules/ErrorMessage";
import { status } from "../../../../../options";
import { useForm, Controller } from "react-hook-form";
import { Requirement as RequirementType } from "../../../../../data/type";

type Props = {
  defaultValues: RequirementType;
  buttonLabel: string;
  onSubmit: (data: RequirementType) => void;
};

const Requirement: React.VFC<Props> = ({
  buttonLabel,
  defaultValues,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RequirementType>({
    mode: "onChange",
    defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(yup.object().shape(requirementSchema)),
  });

  useEffect(() => console.log(errors), [errors]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <Card
      sx={{
        width: "80%",
        maxWidth: "1000px",
        minWidth: "800px",
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      <CardContent sx={{ width: "550px", margin: "0 auto" }}>
        <Field label="タイトル" vertical>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={value}
                  onChange={onChange}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
        <Field label="募集内容" vertical>
          <Controller
            control={control}
            name="text"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={8}
                  onChange={onChange}
                  value={value}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
        <Field label="募集期間" vertical>
          <Controller
            control={control}
            name="period"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <DateRangeField
                  startDate={value.startDate}
                  endDate={value.endDate}
                  setStartDate={(date) => {
                    if (!date) return;
                    const newPeriod = {
                      startDate: date,
                      endDate: value.endDate,
                    };
                    onChange(newPeriod);
                  }}
                  setEndDate={(date) => {
                    if (!date) return;
                    const newPeriod = {
                      startDate: value.startDate,
                      endDate: date,
                    };
                    onChange(newPeriod);
                  }}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
        <Field label="公開ステータス">
          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Select
                  label="公開ステータス"
                  options={status.options}
                  value={value}
                  onChangeValue={onChange}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
        <Field label="Email(連絡先)">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextField
                  variant="outlined"
                  sx={{ width: "300px" }}
                  onChange={onChange}
                  value={value}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
        <Field label="電話番号(連絡先)">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextField
                  variant="outlined"
                  sx={{ width: "300px" }}
                  onChange={onChange}
                  value={value}
                />
                <ErrorMessage isError={!!error} errorMessage={error?.message} />
              </>
            )}
          />
        </Field>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "25px auto 65px", width: "500px" }}
          size="large"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Requirement;