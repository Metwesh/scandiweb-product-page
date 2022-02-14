import { Link } from "react-router-dom";

export default function Navigation() {
  return window.location.pathname === "/" ? (
    <>
      <nav>
        <h1>Product list</h1>
        <div className="push">
          <Link
            className="button button--primary space ADD"
            href="/add-product">
            ADD
          </Link>
          <button
            className="button button--outline space"
            form="delete-product-form"
            id="delete-product-btn">
            MASS DELETE
          </button>
        </div>
      </nav>
      <hr />
    </>
  ) : window.location.pathname === "/add-product" ? (
    <>
      <nav>
        <h1>Add product</h1>
        <div className="push">
          <button
            type="submit"
            form="product_form"
            className="button button--primary space">
            Save
          </button>
          <Link className="button button--outline space" href="/">
            Cancel
          </Link>
        </div>
      </nav>
      <hr />
    </>
  ) : null;
}
