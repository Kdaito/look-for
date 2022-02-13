import React, { useEffect, useState, createContext, useCallback } from "react";
import { auth } from "../api/firebase/setting";
import { signOut as signOutFB } from "../api/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores";
import { resetUser, setUser } from "../stores/user";
import { useHistory } from "react-router-dom";
import { pathNames } from "../routers/path";

type SignOut = {
  signOut?: () => void;
};

export const AuthContext = createContext<SignOut>({});

const AuthProvider: React.FC = ({ children }) => {
  const [isCheckedAuth, setIsCheckedAuth] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ id: user.uid, auth: true }));
      } else {
        dispatch(resetUser());
      }
      setIsCheckedAuth(true);
    });
  }, [dispatch]);

  const signOut = useCallback(async () => {
    await signOutFB()
      .then(() => {
        history.push({ pathname: pathNames.signIn });
        dispatch(resetUser());
      })
      .catch(() => alert("ログアウトに失敗しました"));
  }, [dispatch, history]);

  return (
    <>
      {isCheckedAuth ? (
        <AuthContext.Provider value={{ signOut }}>
          {children}
        </AuthContext.Provider>
      ) : (
        <></>
      )}
    </>
  );
};

export default AuthProvider;
