import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  return {
    user,
    signInWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
