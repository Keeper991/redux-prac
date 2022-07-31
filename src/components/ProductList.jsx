import { css } from "@emotion/react";
import ProductItem from "./ProductItem";

/** @jsxImportSource @emotion/react */
function ProductList() {
  return (
    <section css={productListStyle}>
      <h2>상품 리스트</h2>
      <ul>
        <ProductItem id={1} name="hih" price={10000} type="상의" />
        <ProductItem id={2} name="hih" price={10000} type="상의" />
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
