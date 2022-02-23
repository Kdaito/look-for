import React, { useCallback, useMemo } from "react";
import Requirement from "../../components/organisms/registers/Requirement";
import { requirementDefault } from "../../../data/defaultValues";
import {
  RequirementData,
  RequirementDataForValidation,
} from "../../../data/type";
import { createRequirement } from "../../../api/firebase/firestore/requirement";
import { State } from "../../../stores";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathNames } from "../../../routers/path";
import { uploadRequirementImage } from "../../../api/firebase/storage";

const RegisterRequirement: React.VFC = () => {
  const { id, email } = useSelector((s: State) => s.auth);
  const { phoneNumber } = useSelector((s: State) => s.user);
  const history = useHistory();

  // 初期値を設定し、フォーム用に整形する
  const requirement: RequirementDataForValidation = useMemo(
    () => ({
      ...requirementDefault,
      createdBy: id,
      email,
      phoneNumber,
      imageFile: null,
    }),
    [email, id, phoneNumber]
  );

  const onSubmit = useCallback(
    async (data: RequirementDataForValidation) => {
      const { imageFile, ...others } = data;
      const newData: RequirementData = others;
      await createRequirement(id, newData)
        .then(async (id) => {
          if (imageFile) {
            await uploadRequirementImage(imageFile, id);
          }
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
