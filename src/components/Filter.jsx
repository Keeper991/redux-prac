/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Filter() {
  return (
    <section css={filterStyle}>
      <h2>상품 필터</h2>
      <form>
        <label>
          <input type="radio" value="top" name="filter" />
          상의
        </label>
        <label>
          <input type="radio" value="bottom" name="filter" />
          하의
        </label>
        <label>
          <input type="radio" value="cap" name="filter" />
          모자
        </label>
      </form>
    </section>
  );
}

export default Filter;

const filterStyle = css`
  margin: 1em;
  & > *:not(:last-child) {
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.25em;
    font-weight: 500;
  }

  form {
    & > *:not(:last-of-type) {
      margin-right: 0.5em;
    }
  }
`;
