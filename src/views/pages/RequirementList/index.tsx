import React, { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import RequirementCard from "../../components/molecules/RequirementCard";

const RequirementList: React.VFC = () => {
  const [page, setPage] = useState(1);
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);
  return (
    <>
      <Typography variant="h3" textAlign="center" mb="20px">
        投稿一覧
      </Typography>
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
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Pagination
          count={10}
          color="primary"
          page={page}
          onChange={onChangePage}
          sx={{ my: "40px" }}
        />
      </Box>
    </>
  );
};

export default RequirementList;
