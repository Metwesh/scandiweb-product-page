import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import Navigation from "../components/Navigation";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(null);

  function handleCheck(e) {
    if (!checked) {
      e.preventDefault();
      return false;
    }
  }

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
      <div className="page-content scroll">
        {!products && (
          <div className="loading-wrapper">
            <div className="loading"></div>
          </div>
        )}
        <form
          className="card-stack"
          id="delete-product-form"
          action="https://scandiweb-jr-developer-eval.xyz/deleteProduct.php"
          onSubmit={handleCheck}
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

          {products && <CardList setChecked={setChecked} products={products} />}
        </form>
      </div>
      <hr />
      <footer>
        <h4>Scandiweb Test assignment</h4>
      </footer>
    </>
  );
}
