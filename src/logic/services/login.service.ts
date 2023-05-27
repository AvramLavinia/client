import React from "react";
import { UseAppDispatch } from "./../redux/redux-hooks";
import { useState } from "react";

import { loginRequest } from "../requests/auth.requests";
import { LoginDto, authResponse } from "../requests/auth.requests.types";
import { loggedIn } from "../redux/slices/auth.slice";
import { setUser } from "../redux/slices/user.slice";
import { setAlert } from "../redux/slices/alert.slice";

const LoginService = () => {
  const dispatch = UseAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (object: LoginDto) => {
    await loginRequest(object)
      .then(async (res) => {
        const data: authResponse = res.data;
        if (!res) {
          console.error("SOMETHING GOES WRONG!");
          setLoading(false);
        } else {
          localStorage.setItem("accessToken", data.accessToken);

          dispatch(
            loggedIn({
              isLogged: true,
              accessToken: data.accessToken,
              isLoading: false,
            })
          );
          dispatch(
            setUser({ id: data.id, email: data.email, name: data.name })
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        dispatch(setAlert({ description: error.response.data.message }));
      });
  };

  return { login, loading, setLoading };
};

export default LoginService;
