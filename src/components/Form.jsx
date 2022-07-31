/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Form() {
  return (
    <section css={formStyle}>
      <h2>상품 추가</h2>
      <form>
        <label>
          <h3>상품명</h3>
          <input name="product-title" />
        </label>
        <label>
          <h3>가격</h3>
          <input name="product-price" />
        </label>
        <label>
          <h3>타입</h3>
          <select name="product-type">
            <option value="top">상의</option>
            <option value="bottom">하의</option>
            <option value="cap">모자</option>
          </select>
        </label>
        <button>추가</button>
      </form>
    </section>
  );
}

export default Form;

const formStyle = css`
  margin: 1em;
  & > *:not(:last-child) {
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.25em;
    font-weight: 500;
  }

  form {
    & > *:not(button) {
      display: grid;
      grid-template-columns: 100px 200px;
    }
  }
`;
