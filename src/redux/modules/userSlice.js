import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

//초깃값
const initialState = [
  {
    id: shortid.generate(),
    email: "test@gmail.com",
    pw: "1234",
    userName: "홍길순",
    isLogin: false,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 로그인 시 로그인 완료(true!)
    login: (state, action) => {
      return state.map((user) => {
        if (
          user.email === action.payload.email &&
          user.pw === action.payload.pw
        ) {
          return { ...user, isLogin: !user.isLogin };
        } else {
          return user;
        }
      });
    },
    join: (state, action) => {
      const newUser = {
        id: shortid.generate(),
        email: action.payload.email,
        pw: action.payload.pw,
        userName: action.payload.name,
        isLogin: false,
      };

      state.push(newUser);
    },
    logout: (state, action) => {
      console.log("action -> ", action); //type: "user/logout" payload: undefined
      return state.map((user) => {
        return { ...user, isLogin: false };
      });
    },
  },
});

export const { login, join, logout } = userSlice.actions;
export default userSlice.reducer;
