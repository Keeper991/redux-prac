/** @jsxImportSource @emotion/react */
import Header from "./Header";

function Layout({ title, children }) {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
