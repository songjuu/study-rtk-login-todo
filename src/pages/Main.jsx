import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/modules/userSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.user);
  const boardList = useSelector((state) => state.board);

  console.log("userList", userList);

  const loginUser = userList.find((user) => user.isLogin === true);
  console.log("💛loginUser💛", loginUser);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button onClick={() => navigate("login")}>로그인</button>
          <button onClick={() => navigate("join")}>회원가입</button>
          {/* 로그인시에만 글 작성 가능 */}
          <button
            onClick={() => {
              if (loginUser) {
                navigate("/write", {
                  state: { userId: loginUser.id },
                });
              } else {
                alert("로그인이 필요합니다.");
                return false;
              }
            }}
          >
            글 작성
          </button>
        </div>
        {loginUser && (
          <div>
            {loginUser.userName}님 반갑습니다!
            <button
              onClick={() => {
                const isConfirmed = window.confirm("로그아웃 하시겠습니까?");
                if (isConfirmed) {
                  // alert("로그아웃 연결");
                  dispatch(logout());
                }
              }}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      <div>
        {boardList
          .filter((board) => board.isDeleted === false)
          .map((board) => {
            return (
              <div
                style={{
                  backgroundColor: "#bfd8ff",
                  padding: "5px",
                  margin: "5px",
                  border: "1px solid black",
                }}
                key={board.id}
              >
                <h4>{board.title}</h4>
                <h4>{board.contents}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
