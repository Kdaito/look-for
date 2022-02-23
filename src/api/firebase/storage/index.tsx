import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../setting";

export const uploadUserIcon = async (file: File, uid: string) => {
  const storageRef = ref(storage, `images/userIcon/${uid}/src`);
  await uploadBytes(storageRef, file);
};

export const downloadUserIconURL = async (uid: string): Promise<string> => {
  const storageRef = ref(storage, `images/userIcon/${uid}/src`);

  // 存在するかどうか調べる
  const { items } = await listAll(ref(storage, `images/userIcon/${uid}`));

  if (items.length === 0) return "";
  return await getDownloadURL(storageRef);
};

export const uploadRequirementImage = async (
  file: File,
  requirementId: string
) => {
  const storageRef = ref(storage, `images/requirement/${requirementId}/src`);
  await uploadBytes(storageRef, file);
};

export const downloadRequirementURL = async (
  requirementId: string
): Promise<string> => {
  const storageRef = ref(storage, `images/requirement/${requirementId}/src`);

  const { items } = await listAll(
    ref(storage, `images/requirement/${requirementId}`)
  );

  // 存在するかどうか調べる
  if (items.length === 0) return "";
  return await getDownloadURL(storageRef);
};
