import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import { Option } from "../../../../types";

type Props = {
  label: string;
  isLabel?: boolean;
  value: number;
  options: Option[];
  onChangeValue: (value: number) => void;
};

const Select: React.VFC<Props> = ({
  label,
  isLabel = false,
  value,
  options,
  onChangeValue,
}) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    const newValue = event.target.value as number;
    onChangeValue(newValue);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        {isLabel && <InputLabel id="select-label">{label}</InputLabel>}
        <MuiSelect
          {...(isLabel && { label })}
          labelId="select-label"
          id="select"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option.value as number} key={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
