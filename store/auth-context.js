import { useRouter } from "next/router";
import React, { useState } from "react";

const api_key = "AIzaSyC5vvrpw1TzJYyDPZTL6ISiRGiAsTqtU3I";
const signIn_url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;
const signUp_url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`;

const AuthContext = React.createContext({
  isLoggedIn: false,
  account: {},
  onLogin: (email, password, isDataSaved) => {},
  onSignup: (email, password, isDataSaved) => {},
  onLogout: () => {},
  onAutoLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [accountInfo, setAccountInfo] = useState({ email: "", password: "" });
  const route = useRouter();

  const loginHandler = async (email, password, isDataSaved) => {
    const fetchData = async () => {
      const response = await fetch(signIn_url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Wrong email or password. Please try again.!");
      }
      isDataSaved &&
        localStorage.setItem(
          "authentication",
          JSON.stringify({ email, password })
        );
      setIsLoggedIn(true);
      setAccountInfo({ email, password });
    };
    try {
      await fetchData();
      await route.replace("/Home");
    } catch (error) {
      alert(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authentication");
    setIsLoggedIn(false);
    route.replace("/");
  };

  const autoLoginHandler = () => {
    const account = JSON.parse(localStorage.getItem("authentication"));
    // setAccountInfo(account);
    account && setIsLoggedIn(true);
  };

  const signUpHandler = async (email, password, isDataSaved) => {
    const request = async ()=> {
      const response = await fetch(signUp_url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Login failed!");
      }
      isDataSaved &&
        localStorage.setItem(
          "authentication",
          JSON.stringify({ email, password })
        );
      setIsLoggedIn(true);
    }
    try {
      await request();
      await route.replace("/Home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        onLogin: loginHandler,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onAutoLogin: autoLoginHandler,
        onSignup: signUpHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
