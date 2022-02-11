import { Link } from "react-router-dom";

export default function Navigation(props) {
  const path = window.location.pathname;
  return (
    <>
      {path === "scandiweb-product-page/" ? (
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
      ) : path === "scandiweb-product-page/add-product" ? (
        <nav>
          <h1>Add product</h1>
          <button
            type="submit"
            form="product_form"
            className="button button--primary push">
            Save
          </button>
          <Link className="button button--outline space" to="/">
            Cancel
          </Link>
        </nav>
      ) : null}
      <hr />
    </>
  );
}
