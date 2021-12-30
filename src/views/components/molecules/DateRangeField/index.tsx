import { Box, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import { DatePicker } from "@mui/lab";

type Props = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
};

const DateRangeField: React.VFC<Props> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="開始日"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Typography px={3}>〜</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="終了日"
          value={endDate}
          onChange={setEndDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangeField;
