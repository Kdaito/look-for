import { db } from "../setting";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementData, Requirement } from "../../../data/type";

const getPath = (uid: string) => `users/${uid}/requirement`;

export const createRequirement = async (
  uid: string,
  data: RequirementData
): Promise<void> => {
  await setDoc(doc(db, getPath(uid), uid), data);
};
