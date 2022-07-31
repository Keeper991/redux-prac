/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TotalPrice() {
  return (
    <section css={totalPriceStyle}>
      <h2>총 가격</h2>
      <div>{10000}원</div>
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
