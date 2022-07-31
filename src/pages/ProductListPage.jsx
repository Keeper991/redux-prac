import Form from "../components/Form";
import ProductList from "../components/ProductList";
import TotalPrice from "../components/TotalPrice";
import Layout from "../common/Layout";

function ProductListPage() {
  return (
    <Layout title="상품 페이지">
      <Form />
      <ProductList />
      <TotalPrice />
    </Layout>
  );
}

export default ProductListPage;
