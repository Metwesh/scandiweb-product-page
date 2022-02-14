import { Link } from "react-router-dom";

export default function ProductNavigation() {
  <>
    <nav>
      <h1>Product list</h1>
      <Link className="button button--primary push" to="/add-product">
        ADD
      </Link>
      <button
        className="button button--outline space"
        form="delete-product-form"
        id="delete-product-btn">
        MASS DELETE
      </button>
    </nav>
    <hr />
  </>;
}
