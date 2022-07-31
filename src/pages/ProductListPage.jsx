import Form from "../components/Form";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import TotalPrice from "../components/TotalPrice";
import Layout from "../common/Layout";

function ProductListPage() {
  return (
    <Layout title="상품 페이지">
      <Form />
      <Filter />
      <ProductList />
      <TotalPrice />
    </Layout>
  );
}

export default ProductListPage;
