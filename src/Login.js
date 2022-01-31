import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useUserContext } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useUserContext();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="logos">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
          alt="hello"
          width={"120px"}
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          style={{ transform: "translate(0,-20px" }}
          width={"150px"}
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
