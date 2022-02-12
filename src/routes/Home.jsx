import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import ProductNavigation from "../components/ProductNavigation";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    fetch("https://junior-developer-evaluation.000webhostapp.com/getProducts.php", {
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
      <ProductNavigation />
      <form
        className="page-content card-stack"
        id="delete-product-form"
        action="https://junior-developer-evaluation.000webhostapp.com/deleteProduct.php"
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
