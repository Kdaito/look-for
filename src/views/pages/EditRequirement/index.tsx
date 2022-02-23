import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Requirement from "../../components/organisms/registers/Requirement";
import {
  loadRequirement,
  updateRequirement,
} from "../../../api/firebase/firestore/requirement";
import { State } from "../../../stores";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementDataForValidation } from "../../../data/type";
import { pathNames } from "../../../routers/path";
import { timestampToDate } from "../../../modules/date";
import { uploadRequirementImage } from "../../../api/firebase/storage";

const EditRequirement: React.VFC = () => {
  const { id } = useParams<{ id: string }>();
  const { id: uid } = useSelector((s: State) => s.auth);
  const history = useHistory();
  const [requirement, setRequirement] = useState({
    id,
    data: requirementDefault,
  });

  useEffect(() => {
    const innerPromise = async () => {
      await loadRequirement(uid, id).then((res) => {
        const startDate = timestampToDate(res.data.period.startDate);
        const endDate = timestampToDate(res.data.period.endDate);
        setRequirement({
          ...res,
          data: {
            ...res.data,
            period: {
              startDate,
              endDate,
            },
          },
        });
      });
    };
    innerPromise().catch((e) => {
      alert(e);
      console.error(e);
    });
  }, [id, uid]);

  const requirementForValidation: RequirementDataForValidation = useMemo(
    () => ({
      ...requirement.data,
      imageFile: null,
    }),
    [requirement]
  );

  const onSubmit = useCallback(
    async (data: RequirementDataForValidation) => {
      const { imageFile, ...others } = data;
      await updateRequirement(uid, id, others)
        .then(async () => {
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
    [history, id, uid]
  );

  return (
    <>
      <Requirement
        defaultValues={requirementForValidation}
        buttonLabel="更新する"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EditRequirement;
