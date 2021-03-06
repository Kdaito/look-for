import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { loadAllOfMyRequirements } from "../../../api/firebase/firestore/requirement";
import { useSelector } from "react-redux";
import { State } from "../../../stores";
import { Requirement } from "../../../data/type";
import ListOrganisms from "../../components/organisms/RequirementList";
import { CircularProgress } from "@mui/material";

const RequirementList: React.VFC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { id } = useSelector((s: State) => s.auth);

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
        <ListOrganisms requirements={requirements} isAuthor />
      )}
    </>
  );
};

export default RequirementList;
