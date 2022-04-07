import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handelGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className="App">
      <h1>start simple fire base application</h1>
      {
        user.email ?    <button onClick={handelSignOut}>Sign out</button> :      <button onClick={handelGoogleSingIn}>Sign with Google</button>
      }

   
      <h1>Name : {user.displayName}</h1>
      <h4>Email : {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
