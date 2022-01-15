import { Box, Typography, SxProps } from "@mui/material";
import React, { useMemo } from "react";

type StatusType = "required" | "optional";

type Props = {
  status: StatusType;
  children: React.ReactNode;
};

const rootBoxSX: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const fieldBoxSX: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
};

const statusLabelSX: SxProps = {
  marginRight: "30px",
  minWidth: "75px",
  textAlign: "center",
};

const Field: React.VFC<Props> = ({ status, children }) => {
  const statusObject = useMemo(() => {
    switch (status) {
      case "required":
        return {
          color: "#e2005a",
          label: "必須",
        };
      case "optional":
        return {
          color: "#848484",
          label: "任意",
        };
    }
  }, [status]);

  return (
    <Box sx={rootBoxSX}>
      <Box sx={fieldBoxSX}>
        <Typography
          variant="subtitle1"
          sx={statusLabelSX}
          border={`solid 1px ${statusObject.color}`}
          color={`${statusObject.color}`}
        >
          {statusObject.label}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Field;
