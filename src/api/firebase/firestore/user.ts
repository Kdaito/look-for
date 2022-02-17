import { db } from "../setting";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserData, User } from "../../../data/type";
import { userDefault } from "../../../data/defaultValues";

const path = "users";

export const createUser = async (
  uid: string,
  data: UserData
): Promise<void> => {
  await setDoc(doc(db, path, uid), data);
};

export const updateUser = async (
  uid: string,
  data: UserData
): Promise<void> => {
  await setDoc(doc(db, path, uid), data, { merge: true });
};

export const loadUser = async (uid: string): Promise<User> => {
  const docSnap = await getDoc(doc(db, path, uid));
  if (!docSnap.exists()) {
    throw new Error("ユーザーが見つかりませんでした");
  }
  return { id: docSnap.id, data: { ...userDefault, ...docSnap.data() } };
};
