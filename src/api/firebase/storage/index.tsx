import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../setting";

export const uploadUserIcon = async (file: File, uid: string) => {
  const storageRef = ref(storage, `images/userIcon/${uid}`);

  // 既に存在している場合はいったん削除
  const { items } = await listAll(storageRef);
  if (items.length > 0) {
    await deleteObject(storageRef);
  }

  await uploadBytes(storageRef, file);
};

export const downloadUserIconURL = async (uid: string): Promise<string> =>
  await getDownloadURL(ref(storage, `images/userIcon/${uid}`));
