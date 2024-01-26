import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.utils";

export const AdminContext = createContext();

export const AuthContext = ({ children }) => {
  //keep track of signed in user
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        //if there is a user logged in then set user to current user
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const values = {
    user: user,
    setUser: setUser,
  };

  return (
    <AdminContext.Provider value={values}>
      {!loading && children}
    </AdminContext.Provider>
  );
};
