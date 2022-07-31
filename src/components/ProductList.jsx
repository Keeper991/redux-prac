/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProductItem from "./ProductItem";

function ProductList() {
  const productData = {
    id: 1,
    name: "티셔츠",
    price: 10000,
    type: "top",
  };

  return (
    <section css={productListStyle}>
      <h2>상품 리스트</h2>
      <ul>
        <ProductItem
          key={productData.id}
          id={productData.id}
          name={productData.name}
          price={productData.price}
          type={productData.type}
        />
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
