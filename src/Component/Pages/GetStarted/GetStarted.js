import React from "react";
import "./GetStarted.css";
import useAuth from "../../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

const GetStarted = () => {
  const { signInWithGoogle, setUser, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        // const errorCode = error.code;
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div id="login">
        <h1 id="ff-proof" className="fw-bold ribbon">
          Travel Mania &nbsp;&nbsp;
        </h1>
        <div className="apple">
          {" "}
          <img
            className="mb-5 me-5 bg-dark border border-2 rounded p-3 shadow-lg"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt=""
          />
          <div className="top">
            <span></span>
          </div>
          <div className="butt">
            <span></span>
          </div>
          <div className="bite"></div>
        </div>

        <fieldset id="actions">
          <button
            onClick={handleGoogleLogin}
            type="submit"
            id="submit"
            value="connection"
          >
            <span className="text-secondary me-1 bi bi-google"></span>
            Connection
          </button>
          <p className="option">
            <a href="/">Programming Hero</a>&nbsp;&nbsp;|
            <a href="/">Discription</a>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default GetStarted;
