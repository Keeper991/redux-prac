import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyles from "./common/GlobalStyles";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
