import React, { useState } from "react";
import app from "./../../firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import useFirebase from "../../hooks/useFirebase";

const auth = getAuth(app);
const Register = () => {
  const { signInWithGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailPassword = (event) => {
    event.preventDefault();

    const userName = () => {
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        console.log("Profile updated");
      });
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userName();
        setEmail("");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <h1>Please Register First</h1>
      <form onSubmit={handleEmailPassword}>
        <input onBlur={handleNameBlur} type="text" placeholder="User Name" />
        <br />
        <input onBlur={handleEmailBlur} type="text" placeholder="Email" />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Register;
