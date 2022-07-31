import { css } from "@emotion/react";
import { Link } from "react-router-dom";

/** @jsxImportSource @emotion/react */
function ProductItem({ id, name, price, type }) {
  return (
    <li css={itemStyle}>
      <Link to={`/detail/${id}`}>
        <h4>{name}</h4>
        <div>{price}</div>
        <div>{type}</div>
        <button>❌</button>
      </Link>
    </li>
  );
}

export default ProductItem;

const itemStyle = css`
  background-color: #e0e0e0;
  padding: 0.5em;

  h4 {
    font-size: 1.25em;
  }

  & > *:not(:last-child) {
    margin-bottom: 0.2em;
  }

  & > *:last-child {
    font-size: 0.8em;
  }
`;
