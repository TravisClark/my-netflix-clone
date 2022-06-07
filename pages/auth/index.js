import React, { useState, useContext, useRef, useReducer } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import Container from "../../components/UI/Container";
import classes from "./auth.module.css";
import AuthContext from "../../store/auth-context";

const notificationReducer = (state, action) => {
  if (action.type === "PASSWORD_NOT_MATCH" || action.type === "EMAIL_INPUT") {
    return { isDisplay: true, message: action.message };
  }
  return { isDisplay: false, message: "" };
};

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [notificationState, dispatchedNotification] = useReducer(
    notificationReducer,
    { isDisplay: false, message: "Wrong password" }
  );
  const emailRef = useRef();
  const pwRef = useRef();
  const confirmPwRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    isLogin
      ? authCtx.onLogin(
          emailRef.current.value,
          pwRef.current.value,
          isDataSaved
        )
      : authCtx.onSignup(emailRef.current.value, pwRef.current.value, isDataSaved);
    // authCtx.onLogin(emailRef.current.value, pwRef.current.value, isDataSaved);
  };

  const emailChangeHandler = (e) => {
    const index = e.target.value.indexOf("@");
    const email = e.target.value.substring(0, index);
    // dispatchedEmail({ type: "EMAIL_INPUT", value: e.target.value });
    if (email.length >= 6) {
      dispatchedNotification({ type: "VALID" });
    } else {
      dispatchedNotification({
        type: "EMAIL_INPUT",
        message: "Email must have 6 characters before @",
      });
    }
  };

  const changeFormHandler = () => {
    dispatchedNotification({ type: "VALID" });
    setIsLogin((prevState) => !prevState);
  };
  
  return (
    <form onSubmit={submitHandler}>
      <Container
        className={`${classes.container} relative flex h-screen items-center justify-center min-w-full`}
      >
        <div className="z-20 w-screen h-full relative p-14 flex flex-col md:max-w-md md:w-fit md:h-fit ">
          <div className="absolute bg-black w-full h-full top-0 left-0 z-10 rounded-xl md:opacity-75"></div>
          <div className="z-30">
            <h1 className="text-white text-3xl font-medium mt-12 md:mt-0">
              {isLogin ? "Sign In" : "Sign Up"}
            </h1>
            <div className="flex flex-col space-y-4 my-8">
              <input
                type="email"
                className="w-full p-4 text-md bg-tagColor text-white rounded-md"
                placeholder="Email or phone number"
                ref={emailRef}
                onChange={emailChangeHandler}
                required
              />
              <input
                type="password"
                className="w-full p-4 text-md bg-tagColor text-white rounded-md"
                placeholder="Password"
                ref={pwRef}
                onChange={!isLogin ? checkPasswordMatch : undefined}
                minLength={6}
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  className="w-full p-4 text-md bg-tagColor text-white rounded-md"
                  placeholder="Confirm Password"
                  ref={confirmPwRef}
                  onChange={checkPasswordMatch}
                  required
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-mainColor text-center text-white font-medium py-4 w-full rounded-md text-xl"
              disabled={notificationState.isDisplay}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
            {notificationState.isDisplay && (
              <div className="text-mainColor my-4 text-sm">
                {notificationState.message}
              </div>
            )}
            <div className="flex justify-between w-full text-white mt-3">
              <div className="flex space-x-4">
                <input
                  type="checkbox"
                  onClick={() => setIsDataSaved((prevState) => !prevState)}
                  className="self-center h-full mr-2"
                />
                Remember me
              </div>
              <span className="">Need help?</span>
            </div>
            <div className="text-gray-500 mt-20">
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <span
                className="text-white cursor-pointer"
                onClick={changeFormHandler}
              >
                {isLogin ? "Sign up now." : "Sign in now."}
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </div>
          </div>
        </div>
        <Backdrop />
      </Container>
    </form>
  );
}

export default AuthPage;
