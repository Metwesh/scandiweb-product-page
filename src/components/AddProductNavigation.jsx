import { BrowserRouter, Link } from "react-router-dom";

export default function ProductNavigation() {
  return (
    <>
      <BrowserRouter basename="/scandiweb-product-page/">
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
        <hr />
      </BrowserRouter>
    </>
  );
}
