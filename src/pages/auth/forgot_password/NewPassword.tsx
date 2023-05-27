import React, { useState } from "react";
import "./newpass-style.css";
import "../../../index.css";
import { UseAppDispatch } from "../../../logic/redux/redux-hooks";
import forgotPasswordService from "../../../logic/services/forgotPassword.service";
import PasswordTextInput from "../../../components/inputs/PasswordTextInput";
import BasicButton from "../../../components/buttons/BasicButton";
import { setAlert } from "../../../logic/redux/slices/alert.slice";
import { useSearchParams } from "react-router-dom";

const NewPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  const dispatch = UseAppDispatch();
  const [password, setPassword] = useState<string>("");
  const [rewritePassword, setRewritePassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const { sendForgotPasswordRequest } = forgotPasswordService();

  const handleChangeNewPassword = () => {
    if (
      token === null ||
      [password, rewritePassword].some((value) => value === "")
    ) {
      dispatch(setAlert({ description: "All fields are required" }));
      return;
    }

    if (password !== rewritePassword) {
      dispatch(setAlert({ description: "Passwords not match" }));
      return;
    }

    if (token) {
      setLoading(true);
      sendForgotPasswordRequest(password, token);
      setLoading(false);
      setPassword("");
      setRewritePassword("");
    }
  };

  return (
    <div id="page">
      <div className="sub-main4">
        <div>
          <h1>New Password</h1>
          <p style={{ alignSelf: "flex-start", paddingBottom: 10 }}>
            Type your new password
          </p>

          <PasswordTextInput
            type={"password"}
            defaultLabel={"Password"}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
          />
          <PasswordTextInput
            type={"password"}
            defaultLabel={"Rewrite Password"}
            onChangeText={(text) => {
              setRewritePassword(text);
            }}
            value={rewritePassword}
          />

          <BasicButton
            style={{ marginTop: 30 }}
            title={"Send email"}
            onClick={async () => await handleChangeNewPassword()}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};
export default NewPassword;
