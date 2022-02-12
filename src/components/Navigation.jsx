import { Link } from "react-router-dom";

export default function ProductNavigation() {
  let path = window.location.pathname;
  return path === "/" ? (
    <>
      <nav>
        <h1>Product list</h1>
        <Link className="button button--primary push" to="/add-product">
          Add
        </Link>
        <button
          className="button button--outline space"
          form="delete-product-form"
          id="delete-product-btn">
          Mass delete
        </button>
      </nav>
      <hr />
    </>
  ) : path === "add-product" ? (
    <>
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
    </>
  ) : null;
}
