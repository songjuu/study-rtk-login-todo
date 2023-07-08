import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onChangeEmailHandler] = useInput();
  const [pw, onChangePwHandler] = useInput();

  // console.log("email", email);
  // console.log("pw", pw);

  return (
    <div>
      <h1>Login 페이지 입니다.</h1>
      <input
        type="text"
        value={email}
        placeholder="이메일을 입력해주세요."
        onChange={onChangeEmailHandler}
      ></input>
      <input
        type="password"
        value={pw}
        placeholder="비밀번호를 입력해주세요."
        onChange={onChangePwHandler}
      ></input>
      <button
        onClick={() => {
          //(1) 로그인 완료

          dispatch(
            login({
              email,
              pw,
            })
          );

          navigate("/");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
