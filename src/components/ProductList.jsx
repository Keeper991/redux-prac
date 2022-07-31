/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList() {
  const productList = useSelector((store) => store.product.list);

  return (
    <section css={productListStyle}>
      <h2>상품 리스트</h2>
      <ul>
        {productList.map((productData) => (
          <ProductItem
            id={productData.id}
            name={productData.name}
            price={productData.price}
            type={productData.type}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;

const productListStyle = css`
  margin: 1em;
  & > *:not(:last-child) {
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.25em;
    font-weight: 500;
  }

  ul {
    & > *:not(:last-of-type) {
      margin-bottom: 0.5em;
    }
  }
`;
