import React, { useCallback, useState } from "react";
import Requirement from "../../components/organisms/registers/Requirement";
import { requirementDefault } from "../../../data/defaultValues";
import { Requirement as RequirementType } from "../../../data/type";

const RegisterRequirement: React.VFC = () => {
  const onSubmit = useCallback((data: RequirementType) => {
    console.log(data);
    console.log("が提出されました");
    // firestoreに登録
    // マイ投稿リストページに遷移させる
  }, []);
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
