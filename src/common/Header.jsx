/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header({ title }) {
  const handleLoginButton = () => {};

  return (
    <header css={headerStyle}>
      <h1>{title}</h1>
      <button onClick={handleLoginButton}>로그인</button>
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
