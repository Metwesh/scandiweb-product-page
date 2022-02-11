import { BrowserRouter, Link } from "react-router-dom";

export default function ProductNavigation() {
  return (
    <BrowserRouter basename="/scandiweb-product-page">
      <nav>
        <h1>Product list</h1>
        <Link className="button button--primary push" to="/add-product">
          Add Product
        </Link>
        <button
          className="button button--outline space"
          form="delete-product-form"
          id="delete-product-btn">
          Mass delete
        </button>
      </nav>
      <hr />
    </BrowserRouter>
  );
}
