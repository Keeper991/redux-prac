/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/modules/user";

function Header({ title }) {
  const isLogin = useSelector((store) => store.user.isLogin);
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    dispatch(login());
  };

  const handleLogoutButton = () => {
    dispatch(logout());
  };

  return (
    <header css={headerStyle}>
      <h1>{title}</h1>
      {/* <button onClick={isLogin ? handleLogoutButton : handleLoginButton}>
        {isLogin ? "로그아웃" : "로그인"}
      </button> */}
      {isLogin ? (
        <button onClick={handleLogoutButton}>로그아웃</button>
      ) : (
        <button onClick={handleLoginButton}>로그인</button>
      )}
    </header>
  );
}

export default Header;

const headerStyle = css`
  width: 100%;
  padding: 1em;
  position: relative;
  & > h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }

  & > button {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
  }
`;
