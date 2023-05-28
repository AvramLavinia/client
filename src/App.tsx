import React from "react";
import { Provider } from "react-redux";
import { store } from "./logic/redux/store";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./logic/context/auth.context";
import AlertProvider from "./logic/context/alert.context";
import PasswordProvider from "./logic/context/password.context";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AlertProvider>
          <PasswordProvider>
            <AppRouter />
          </PasswordProvider>
        </AlertProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
