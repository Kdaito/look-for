import { db } from "../setting";
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { requirementDefault } from "../../../data/defaultValues";
import { RequirementData, Requirement } from "../../../data/type";

const getPath = (uid: string) => `users/${uid}/requirement`;

export const createRequirement = async (
  uid: string,
  data: RequirementData
): Promise<void> => {
  await addDoc(collection(db, getPath(uid)), data);
};

export const updateRequirement = async (
  uid: string,
  requirementId: string,
  data: RequirementData
): Promise<void> => {
  await setDoc(doc(db, getPath(uid), requirementId), data, { merge: true });
};

export const loadRequirement = async (
  uid: string,
  requirementId: string
): Promise<Requirement> => {
  const docSnap = await getDoc(doc(db, getPath(uid), requirementId));
  if (!docSnap.exists) {
    throw new Error("該当のデータが見つかりませんでした");
  }
  return { id: docSnap.id, data: { ...requirementDefault, ...docSnap.data() } };
};

// 全ての募集を取得する
export const loadAllRequirements = async (): Promise<Requirement[]> => {
  const docSnaps = await getDocs(collectionGroup(db, "requirement"));
  const result: Requirement[] = [];
  docSnaps.forEach((doc) => {
    if (!doc.exists) return;
    result.push({ id: doc.id, data: { ...requirementDefault, ...doc.data() } });
  });
  return result;
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
