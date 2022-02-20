import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { loadAllRequirements } from "../../../api/firebase/firestore/requirement";
import { Requirement } from "../../../data/type";
import ListOrganisms from "../../components/organisms/RequirementList";
import { CircularProgress } from "@mui/material";
import { timestampToDate } from "../../../modules/date";

const Home: React.VFC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  // 募集投稿にフィルターをかける
  const displayRequirments = useMemo(() => {
    console.log("filter");
    return requirements.filter(({ data }) => {
      const endDate = data.period.endDate;
      const dateTypeEndDate = timestampToDate(data.period.endDate);
      if (
        endDate &&
        dateTypeEndDate &&
        dateTypeEndDate.getTime() < new Date().getTime() // 募集期間終了日が過ぎていたらはじく
      )
        return false;

      if (data.status === 2) return false; // ステータスが非公開だったらはじく
      return true;
    });
  }, [requirements]);

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
        <ListOrganisms requirements={displayRequirments} />
      )}
    </>
  );
};

export default Home;
