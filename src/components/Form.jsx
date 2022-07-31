/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setPrice("");
    setType("");
  };

  return (
    <section css={formStyle}>
      <h2>상품 추가</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>상품명</h3>
          <input
            name="product-title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <h3>가격</h3>
          <input
            name="product-price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          <h3>타입</h3>
          <select
            name="product-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">옵션을 선택해주세요.</option>
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
