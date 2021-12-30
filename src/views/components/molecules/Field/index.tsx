import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

const Field: React.VFC<Props> = ({ label, children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px 0",
      }}
    >
      <Typography variant="body1" sx={{ margin: "10px" }}>
        {label}
      </Typography>
      {children}
    </Box>
  );
};

export default Field;
