import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
// useDispatch hook is used to modify values of the state
// useSelector is used for displaying the values of the state
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "gokul", age: 21, email: "gokuljs@gmail.com" })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
