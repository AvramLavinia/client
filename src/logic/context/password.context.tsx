import React, { createContext, useEffect, useState } from "react";
import GetAllPasswordsService from "../services/password/getPasswords.service";

export const PasswordContext = createContext(undefined);

const PasswordProvider = (props: any) => {
  const { getAllPasswordsEvent, loading } = GetAllPasswordsService();

  useEffect(() => {
    const methode = async () => {
      await getAllPasswordsEvent();
    };

    methode();
  }, []);

  return (
    <PasswordContext.Provider value={undefined}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
