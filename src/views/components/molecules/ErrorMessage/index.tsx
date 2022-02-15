import { Typography } from "@mui/material";
import React from "react";

type Props = {
  errorMessage?: string;
  isError: boolean;
};

const ErrorMessage: React.VFC<Props> = ({ errorMessage, isError }) => (
  <>
    {isError && (
      <Typography mt={1} color="error">
        {errorMessage}
      </Typography>
    )}
  </>
);

export default ErrorMessage;
