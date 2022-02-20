import React, { useEffect, useState, useMemo } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import RequirementCard from "../../components/molecules/RequirementCard";
import { loadAllOfMyRequirements } from "../../../api/firebase/firestore/requirement";
import { useSelector } from "react-redux";
import { State } from "../../../stores";
import { Requirement } from "../../../data/type";
import { pathNames } from "../../../routers/path";
import { CircularProgress } from "@mui/material";

const RequirementList: React.VFC = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { id } = useSelector((s: State) => s.auth);
  const history = useHistory();

  const MAX_DISPLAY = 10;

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

  // ユーザーの募集投稿を全て取得する
  useEffect(() => {
    const innerPromise = async () => {
      await loadAllOfMyRequirements(id).then((res) => {
        setRequirements(res);
        setIsLoading(false);
      });
    };
    innerPromise().catch((e) => {
      console.error(e);
      alert("データの取得に失敗しました");
    });
  }, [id]);

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 65px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={200} />
        </Box>
      ) : (
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
                  isAuthor
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
      )}
    </>
  );
};

export default RequirementList;
