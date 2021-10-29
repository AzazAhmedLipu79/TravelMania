import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        alert("Sign-out successful");
      })
      .catch((error) => {
        alert("Somthing Wrong ❌");
      });
  };

  return {
    user,
    setUser,
    signInWithGoogle,
    isLoading,
    setIsLoading,
    logout,
  };
};

export default useFirebase;
