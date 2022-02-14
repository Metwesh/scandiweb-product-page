export default function Navigation() {
  return window.location.pathname === "/" ? (
    <>
      <nav>
        <h1>Product list</h1>
        <div className="push">
          <a className="button button--primary space" href="/add-product">
            ADD
          </a>
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
          <a className="button button--outline space" href="/">
            Cancel
          </a>
        </div>
      </nav>
      <hr />
    </>
  ) : null;
}
