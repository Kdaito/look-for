import { db } from "../setting";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementData, Requirement } from "../../../data/type";

const getPath = (uid: string) => `users/${uid}/requirement`;

export const createRequirement = async (
  uid: string,
  data: RequirementData
): Promise<void> => {
  await addDoc(collection(db, getPath(uid)), data);
};

// 自分が投稿した募集を全て取得する
export const loadAllOfMyRequirements = async (
  uid: string
): Promise<Requirement[]> => {
  const docSnaps = await getDocs(collection(db, getPath(uid)));
  const result: Requirement[] = [];
  docSnaps.forEach((doc) => {
    if (!doc.exists) return;
    result.push({ id: doc.id, data: { ...requirementDefault, ...doc.data() } });
  });
  return result;
};
