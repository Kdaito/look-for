import { Box } from "@mui/material";
import React from "react";
import RequirementCard from "../../components/molecules/RequirementCard";

const RequirementList: React.VFC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px 20px",
        margin: "0 auto",
      }}
    >
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
      <RequirementCard />
    </Box>
  );
};

export default RequirementList;
