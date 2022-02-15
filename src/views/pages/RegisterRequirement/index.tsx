import React, { useCallback } from "react";
import Requirement from "../../components/organisms/registers/Requirement";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementData } from "../../../data/type";
import { createRequirement } from "../../../api/firebase/firestore/requirement";
import { State } from "../../../stores";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathNames } from "../../../routers/path";

const RegisterRequirement: React.VFC = () => {
  const { id } = useSelector((s: State) => s.auth);
  const history = useHistory();
  const onSubmit = useCallback(
    async (data: RequirementData) => {
      // firestoreに登録
      await createRequirement(id, data)
        .then(() => {
          history.push(pathNames.main);
        })
        .catch((e) => {
          console.error(e);
          alert("登録に失敗しました");
        });
    },
    [history, id]
  );
  return (
    <>
      <Requirement
        defaultValues={requirementDefault}
        buttonLabel="作成する"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default RegisterRequirement;
