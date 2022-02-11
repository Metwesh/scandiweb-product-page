import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import Navigation from "../components/Navigation";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    fetch("http://127.0.0.1:8080/products/getProducts.php", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("No products available");
        }
        return response.json();
      })
      .then((products) => setProducts(products))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <Navigation />
      <form
        className="page-content card-stack"
        id="delete-product-form"
        action="http://127.0.0.1:8080/products/deleteProduct.php"
        method="post">
        {error && (
          <h3 className="message">
            No products available
            <span>
              <Link
                className="button button--primary space space-grid"
                to="/add-product">
                Add Product ?
              </Link>
            </span>
          </h3>
        )}
        {products && <CardList products={products} />}
      </form>
      <hr />
      <footer>
        <h4>Scandiweb Test assignment</h4>
      </footer>
    </>
  );
}
