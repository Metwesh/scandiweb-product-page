import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import Navigation from "../components/Navigation";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://scandiweb-jr-developer-eval.xyz/getProducts.php", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setProducts([]);
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
        action="https://scandiweb-jr-developer-eval.xyz/deleteProduct.php"
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
        {!products ? <h3>Loading ...</h3> : null}
        {products && <CardList products={products} />}
      </form>
      <hr />
      <footer>
        <h4>Scandiweb Test assignment</h4>
      </footer>
    </>
  );
}
