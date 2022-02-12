import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordFB,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFB,
  UserCredential,
} from "firebase/auth";
import { auth } from "../setting";

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> =>
  signInWithEmailAndPasswordFB(auth, email, password);

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> =>
  createUserWithEmailAndPasswordFB(auth, email, password);
