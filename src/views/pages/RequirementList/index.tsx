import React, { useEffect, useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import RequirementCard from "../../components/molecules/RequirementCard";
import { loadAllOfMyRequirements } from "../../../api/firebase/firestore/requirement";
import { useSelector } from "react-redux";
import { State } from "../../../stores";
import { Requirement } from "../../../data/type";
import { pathNames } from "../../../routers/path";

const RequirementList: React.VFC = () => {
  const [page, setPage] = useState(1);
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { id } = useSelector((s: State) => s.auth);
  const history = useHistory();

  // ユーザーの募集投稿を全て取得する
  useEffect(() => {
    const innerPromise = async () => {
      await loadAllOfMyRequirements(id).then((res) => {
        setRequirements(res);
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
        {requirements.length !== 0 &&
          requirements.map((requirement) => (
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
