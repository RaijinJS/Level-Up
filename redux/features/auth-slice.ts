import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  user: UserCredentials;
  error: string;
};

type UserCredentials = {
  name: string;
  email: string;
  password: string;
};

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  } as UserCredentials,
  error: "",
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUserName, setUserEmail, setUserPassword, setError } = auth.actions;
export default auth.reducer;
