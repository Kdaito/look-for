import React, { useState, useMemo } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import RequirementCard from "../../molecules/RequirementCard";
import { Requirement } from "../../../../data/type";
import { pathNames } from "../../../../routers/path";

type Props = {
  requirements: Requirement[];
  isAuthor?: boolean;
};

const MAX_DISPLAY = 10;

const RequirementList: React.VFC<Props> = ({
  requirements,
  isAuthor = false,
}) => {
  const [page, setPage] = useState(1);
  const history = useHistory();

  const pageCount = useMemo(() => {
    return Math.ceil(requirements.length / MAX_DISPLAY);
  }, [requirements]);

  const requirementsOnDisplay = useMemo(() => {
    const result = requirements.slice(
      (page - 1) * MAX_DISPLAY,
      page * MAX_DISPLAY
    );
    return result;
  }, [requirements, page]);

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  return (
    <>
      <Typography variant="h3" textAlign="center" mb="20px">
        投稿一覧
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 330px))",
          gap: "40px 20px",
          margin: "0 auto",
        }}
      >
        {requirementsOnDisplay.length !== 0 &&
          requirementsOnDisplay.map((requirement) => (
            <RequirementCard
              requirement={requirement}
              key={requirement.id}
              isAuthor={isAuthor}
              onClickEdit={(id) => {
                const path = generatePath(pathNames.edit, {
                  id,
                });
                history.push(path);
              }}
            />
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={pageCount}
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
