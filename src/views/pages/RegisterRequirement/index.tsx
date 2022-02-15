import React, { useCallback, useMemo } from "react";
import Requirement from "../../components/organisms/registers/Requirement";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementData } from "../../../data/type";
import { createRequirement } from "../../../api/firebase/firestore/requirement";
import { State } from "../../../stores";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathNames } from "../../../routers/path";

const RegisterRequirement: React.VFC = () => {
  const { id, email } = useSelector((s: State) => s.auth);
  const { phoneNumber } = useSelector((s: State) => s.user);
  const history = useHistory();

  // 初期値を設定する
  const requirement = useMemo(
    () => ({
      ...requirementDefault,
      createdBy: id,
      email,
      phoneNumber,
    }),
    [email, id, phoneNumber]
  );

  const onSubmit = useCallback(
    async (data: RequirementData) => {
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
        defaultValues={requirement}
        buttonLabel="作成する"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default RegisterRequirement;
