import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { loadAllRequirements } from "../../../api/firebase/firestore/requirement";
import { Requirement } from "../../../data/type";
import ListOrganisms from "../../components/organisms/RequirementList";
import { CircularProgress } from "@mui/material";

const Home: React.VFC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  // ユーザーの募集投稿を全て取得する
  useEffect(() => {
    const innerPromise = async () => {
      await loadAllRequirements().then((res) => {
        setRequirements(res);
        setIsLoading(false);
      });
    };
    innerPromise().catch((e) => {
      console.error(e);
      alert("データの取得に失敗しました");
    });
  }, []);

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
        <ListOrganisms requirements={requirements} />
      )}
    </>
  );
};

export default Home;
