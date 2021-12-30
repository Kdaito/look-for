import { Box, TextField } from "@mui/material";
import React from "react";

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
    ></Box>
  );
};

export default DateRangeField;
