import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import { OptionObject } from "../../../../types";

type Props = {
  label: string;
  isLabel?: boolean;
  value: number | null;
  options: OptionObject[];
  onChangeValue: (value: number) => void;
};

const Select: React.VFC<Props> = ({
  label,
  isLabel = false,
  value,
  options,
  onChangeValue,
}) => {
  const handleChange = (event: SelectChangeEvent<number | string>) => {
    const newValue = event.target.value as number;
    onChangeValue(newValue);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        {isLabel && <InputLabel id="select-label">{label}</InputLabel>}
        <MuiSelect
          id="select"
          labelId="select-label"
          value={value ? value : ""}
          {...(isLabel && { label })}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
