import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../setting";

export const uploadUserIcon = async (file: File, uid: string) => {
  const storageRef = ref(storage, `images/${uid}/userIcon/src`);
  await uploadBytes(storageRef, file);
};

export const downloadUserIconURL = async (uid: string): Promise<string> => {
  const storageRef = ref(storage, `images/${uid}/userIcon/src`);

  // 存在するかどうか調べる
  const { items } = await listAll(ref(storage, `images/${uid}/userIcon`));

  if (items.length === 0) return "";
  return await getDownloadURL(storageRef);
};
