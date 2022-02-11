import { Link, useRouteMatch } from "react-router-dom";

export default function Navigation(props) {
  const path = window.location.pathname;
  let { url } = useRouteMatch();

  return (
    <>
      {path === `${url}/` ? (
        <nav>
          <h1>Product list</h1>
          <Link
            className="button button--primary push"
            to={`${url}/add-product`}>
            Add Product
          </Link>
          <button
            className="button button--outline space"
            form="delete-product-form"
            id="delete-product-btn">
            Mass delete
          </button>
        </nav>
      ) : path === `${url}/add-product` ? (
        <nav>
          <h1>Add product</h1>
          <button
            type="submit"
            form="product_form"
            className="button button--primary push">
            Save
          </button>
          <Link className="button button--outline space" to={`${url}/`}>
            Cancel
          </Link>
        </nav>
      ) : null}
      <hr />
    </>
  );
}
