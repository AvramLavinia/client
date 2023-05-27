import React, { useState } from "react";
import "./login-style.css";
import "../../../index.css";
import { profile, email, pass } from "../../images/images";
import LoginService from "../../../logic/services/login.service";
import { UseAppDispatch } from "../../../logic/redux/redux-hooks";
import { setAlert } from "../../../logic/redux/slices/alert.slice";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/inputs/TextInput";
import PasswordTextInput from "../../../components/inputs/PasswordTextInput";
import BasicButton from "../../../components/buttons/BasicButton";

const Login = () => {
  const navigation = useNavigate();
  const { login } = LoginService();
  const dispatch = UseAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div id="page">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>LOGIN PAGE</h1>

              <TextInput
                type={"text"}
                defaultLabel={"Email"}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />

              <PasswordTextInput
                type={"password"}
                defaultLabel={"Password"}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <p
                style={{ alignSelf: "flex-end", cursor: "pointer" }}
                onClick={() => {
                  navigation("/ForgotPassword");
                }}
              >
                Forgot Password
              </p>

              <BasicButton
                title={"Log in"}
                onClick={async () => {
                  if (email !== "" && password !== "") {
                    setLoading(true);
                    await login({ email, password });

                    setLoading(false);
                  } else {
                    dispatch(
                      setAlert({ description: "All fields must be required" })
                    );
                  }
                }}
                loading={loading}
              />
              <div className="link">
                <p
                  onClick={() => {
                    navigation("/Register");
                  }}
                  style={{ marginTop: 10, fontSize: 17, cursor: "pointer" }}
                >
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
