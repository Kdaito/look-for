import React, { useEffect, useState, createContext, useCallback } from "react";
import { auth } from "../api/firebase/setting";
import { signOut as signOutFB } from "../api/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores";
import { resetAuth, setAuth } from "../stores/auth";
import { useHistory } from "react-router-dom";
import { pathNames } from "../routers/path";
import { resetUser, setUser } from "../stores/user";
import { loadUser } from "../api/firebase/firestore/user";

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
      if (!user) {
        dispatch(resetAuth());
        setIsCheckedAuth(true);
        return;
      }
      dispatch(setAuth({ id: user.uid, email: user.email || "", auth: true }));
      const innerPromise = async () => {
        await loadUser(user.uid).then((res) => dispatch(setUser(res.data)));
      };
      innerPromise().catch((e) => {
        console.error(e);
        alert("ユーザーの取得に失敗しました");
      });
      setIsCheckedAuth(true);
    });
  }, [dispatch]);

  const signOut = useCallback(async () => {
    await signOutFB().then(() => {
      dispatch(resetAuth());
      dispatch(resetUser());
      history.push({ pathname: pathNames.signIn });
    });
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
