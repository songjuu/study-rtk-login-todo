import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/modules/boardSlice";
import { useLocation, useNavigate } from "react-router-dom";

function Write() {
  const [title, onChangeTitleHandler] = useInput();
  const [contents, onChangeContentsHandler] = useInput();

  const postList = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("postList🔅🔅", postList);

  //글작성 버튼 눌렀을 때 state로 userId를 loginUser.id로 넘겨줬어
  const writerId = location.state.userId; // ??여기 이해 안감=>ㅇㅋ이해감

  //글 작성
  const handlerWriteButtonClick = () => {
    dispatch(
      addPost({
        title,
        contents,
        writerId,
      })
    );
    navigate("/");
  };

  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <h1>글 작성 페이지입니다.</h1>
      제목:
      <input
        placeholder="글 제목을 입력해주세요."
        value={title}
        onChange={onChangeTitleHandler}
      />
      <br />
      내용:
      <input
        placeholder="글 내용을 입력해주세요."
        value={contents}
        onChange={onChangeContentsHandler}
      />
      <br />
      <button onClick={handlerWriteButtonClick}>글 작성</button>
    </div>
  );
}

export default Write;
