export default function Navigation() {
  return window.location.pathname === "/" ? (
    <>
      <nav>
        <h1>Product list</h1>
        <a className="button button--primary push" href="/add-product">
          ADD
        </a>
        <button
          className="button button--outline space"
          form="delete-product-form"
          id="delete-product-btn">
          MASS DELETE
        </button>
      </nav>
      <hr />
    </>
  ) : window.location.pathname === "/add-product" ? (
    <>
      <nav>
        <h1>Add product</h1>
        <button
          type="submit"
          form="product_form"
          className="button button--primary push">
          Save
        </button>
        <a className="button button--outline space" href="/">
          Cancel
        </a>
      </nav>
      <hr />
    </>
  ) : null;
}
