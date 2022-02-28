import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

export default function AddProduct() {
  const [products, setProducts] = useState(null);
  const [selectedType, setSelectedType] = useState();
  const [inputSku, setInputSku] = useState();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    fetch("https://scandiweb-jr-developer-eval.xyz/getProducts.php", {
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
      .catch((error) => console.log(error));
  }, []);

  let p_sku = products
    ? products.map((_product, i) => {
        return products[i].product_sku;
      })
    : null;

  function handleSubmit(e) {
    let formattedSKU = selectedType + inputSku;
    p_sku.forEach((sku) => {
      if (sku !== formattedSKU) return;
      else {
        setErrorMessage(true);
        e.preventDefault();
      }
    });
  }

  return (
    <>
      <Navigation />
      <form
        id="product_form"
        action="https://scandiweb-jr-developer-eval.xyz/addProduct.php"
        method="post"
        onSubmit={handleSubmit}
        className="page-content mini-grid">
        <label>SKU:</label>

        <input
          type="text"
          placeholder="SKU"
          id="sku"
          name="sku"
          onChange={(e) => {
            setErrorMessage(false);
            setInputSku(e.target.value.padStart(4, "0"));
          }}
          pattern="[a-z\d]*"
          required
        />
        {errorMessage && (
          <p className="error-message">
            SKU already exists please input another
          </p>
        )}
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          pattern="^[a-zA-Z]+$"
          required
        />
        <label>Price ($):</label>
        <input
          type="text"
          placeholder="Price"
          id="price"
          name="price"
          pattern="^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$"
          required
        />
        <label>Product type:</label>
        <select
          required
          id="productType"
          name="type"
          defaultValue={""}
          onChange={(e) => {
            setSelectedType(e.target.value.toUpperCase().substring(0, 4));
          }}
          className="dropdown-select">
          <option value="" disabled hidden>
            Select type
          </option>

          <option key="DVD" id="DVD" value="DVD">
            DVD
          </option>

          <option key="Furniture" id="Furniture" value="Furniture">
            Furniture
          </option>

          <option key="Book" id="Book" value="Book">
            Book
          </option>
        </select>

        {selectedType === "DVD" ? (
          <>
            <label>Size (MB):</label>
            <input
              type="text"
              placeholder="Size"
              id="size"
              name="description"
              pattern="^[1-9]\d*(\.\d+)?$"
              required
            />

            <p className="description">
              * Please state DVD capacity in megabytes
            </p>
          </>
        ) : selectedType === "FURN" ? (
          <>
            <label>Height (cm):</label>
            <input
              type="text"
              placeholder="Height"
              id="height"
              name="description[height]"
              pattern="^[1-9]\d*(\.\d+)?$"
              required
            />

            <label>Width (cm):</label>
            <input
              type="text"
              placeholder="Width"
              id="width"
              name="description[width]"
              pattern="^[1-9]\d*(\.\d+)?$"
              required
            />

            <label>Length (cm):</label>
            <input
              type="text"
              placeholder="Length"
              id="length"
              name="description[length]"
              pattern="^[1-9]\d*(\.\d+)?$"
              required
            />

            <p className="description">
              * Please specify product dimensions in HxWxL format
            </p>
          </>
        ) : selectedType === "BOOK" ? (
          <>
            <label>Weight (kg):</label>
            <input
              type="text"
              placeholder="Weight"
              id="weight"
              name="description"
              pattern="^[1-9]\d*(\.\d+)?$"
              required
            />
            <p className="description">
              * Please provide product weight in kilograms
            </p>
          </>
        ) : (
          <p className="description">
            * Please select a product type from the dropdown above
          </p>
        )}
        {/* DYNAMIC VALUES END */}
      </form>
      <hr />
      <footer>
        <h4>Scandiweb Test assignment</h4>
      </footer>
    </>
  );
}
