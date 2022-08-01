/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../redux/modules/product";

const typeMap = {
  top: "상의",
  bottom: "하의",
  cap: "모자",
};

function ProductItem({ id, name, price, type }) {
  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(removeProduct(id));
  };

  return (
    <li css={itemStyle}>
      <Link to={`/detail/${id}`}>
        <h4>{name}</h4>
        <div>{price}</div>
        <div>{typeMap[type]}</div>
      </Link>
      <button onClick={handleRemoveButtonClick}>❌</button>
    </li>
  );
}

export default ProductItem;

const itemStyle = css`
  background-color: #e0e0e0;
  padding: 0.5em;

  & > a {
    & > h4 {
      font-size: 1.25em;
      font-weight: 600;
    }
    & > *:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }

  & > button {
    margin-top: 0.5em;
  }
`;
