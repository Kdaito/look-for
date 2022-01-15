import { Box, Typography, SxProps } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
  vertical?: boolean;
};

const rootBoxSX: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const verticalBoxSX: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "20px 0",
};

const horizontalBoxSX: SxProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "20px 0",
};

const verticalLabelSX: SxProps = {
  margin: "10px",
};

const horizontalLabelSX: SxProps = {
  marginRight: "20px",
  minWidth: "200px",
};

const Field: React.VFC<Props> = ({ label, children, vertical = false }) => {
  return (
    <Box sx={rootBoxSX}>
      <Box sx={vertical ? verticalBoxSX : horizontalBoxSX}>
        <Typography
          variant="body1"
          sx={vertical ? verticalLabelSX : horizontalLabelSX}
        >
          {label}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Field;
