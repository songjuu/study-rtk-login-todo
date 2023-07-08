import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { join } from "../redux/modules/userSlice";

function Join() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput();
  const [pw, onChangePw] = useInput();
  const [confPw, onChangeConfPw] = useInput();
  const [name, onChangeName] = useInput();

  return (
    <div>
      <h1>Join 페이지입니다.</h1>
      <input
        value={email}
        placeholder="이메일을 입력해주세요."
        onChange={onChangeEmail}
      />
      <input
        value={pw}
        placeholder="비밀번호를 입력해주세요."
        onChange={onChangePw}
      />
      <input
        value={confPw}
        placeholder="확인비밀번호를 입력해주세요."
        onChange={onChangeConfPw}
      />
      <input
        value={name}
        placeholder="고객명을 입력해주세요."
        onChange={onChangeName}
      />
      <button
        onClick={() => {
          if (pw !== confPw) {
            alert("비밀번호가 다릅니다. 확인해주세요!");
            return false;
          }

          //회원가입시 새로운 유저 등록
          dispatch(
            join({
              email,
              pw,
              name,
            })
          );

          alert("회원가입 완료!");
          navigate("/");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default Join;
