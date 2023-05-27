import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux-hooks";

export type PasswordState = {
  id: string | null;
};

const initialState: PasswordState = {
  id: null,
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<PasswordState>) => {
      return { ...state, ...action.payload };
    },
    updateUser: (state, action: PayloadAction<Partial<PasswordState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    deleteUser: (state) => {
      return initialState;
    },
  },
});

export const { setUser, updateUser, deleteUser } = passwordSlice.actions;
export const selectUserValue = (state: RootState) => state.user;

export default passwordSlice.reducer;
