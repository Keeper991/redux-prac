/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const productList = useSelector((store) => store.product.list);

  return (
    <section css={totalPriceStyle}>
      <h2>총 가격</h2>
      <div>
        {productList.reduce((acc, cur) => acc + Number(cur.price), 0)}원
      </div>
    </section>
  );
}

export default TotalPrice;

const totalPriceStyle = css`
  margin: 1em;
  text-align: right;

  & > div {
    font-size: 1.2em;
    font-weight: 600;
    margin-top: 0.2em;
  }
`;
