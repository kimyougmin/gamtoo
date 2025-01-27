import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthStateInterface} from "@/types/AuthStateInterface";

type InitialState = {
  value: AuthStateInterface;
}


const initialState = {
  value: {
    isAuth: false,
    userName: "",
    userId: ""
  } as AuthStateInterface,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (State, action: PayloadAction<AuthStateInterface>) => {
      return {
        value: {
          isAuth: action.payload.isAuth,
          userName: action.payload.userName,
          userId: action.payload.userId
        }
      }
    },
  }
});
export const {logIn, logOut} = auth.actions;
export default auth.reducer;