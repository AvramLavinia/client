import { UseAppDispatch } from "./../redux/redux-hooks";

import { setAlert } from "../redux/slices/alert.slice";
import { loggedIn } from "../redux/slices/auth.slice";
import { setUser } from "../redux/slices/user.slice";
import { registerRequest } from "../requests/auth.requests";
import { RegisterDto } from "../requests/auth.requests.types";
import { useNavigate as UseNavigate } from "react-router-dom";

const registerService = () => {
  const navigate = UseNavigate();
  const dispatch = UseAppDispatch();

  const register = async (object: RegisterDto) => {
    await registerRequest(object)
      .then(async (res) => {
        if (!res) {
          console.error("SOMETHING GOES WRONG!");
        } else {
          localStorage.setItem("accessToken", res.data.accessToken);
          //Auth value in redux store
          dispatch(
            loggedIn({
              isLogged: true,
              accessToken: res.data.accessToken,
              isLoading: false,
            })
          );

          //User value in redux store
          dispatch(setUser(res.data));

          navigate("/");
        }
      })
      .catch((error) => {
        dispatch(setAlert({ description: error.response.data.message }));
      });
  };

  return { register };
};

export default registerService;
