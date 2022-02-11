import { useState } from "react";
import AddProductNavigation from "../components/AddProductNavigation";

export default function AddProduct() {
  const [selectedType, setSelectedType] = useState();
  return (
    <>
      <AddProductNavigation />
      <form
        id="product_form"
        action="http://127.0.0.1:8080/products/addProduct.php"
        method="post"
        className="page-content mini-grid">
        <label>SKU:</label>
        <input
          type="text"
          placeholder="SKU"
          id="sku"
          name="sku"
          pattern="[a-z\d]*"
          required
        />
        <label>Name:</label>
        <input type="text" placeholder="Name" id="name" name="name" required />
        <label>Price ($):</label>
        <input
          type="text"
          placeholder="Price"
          id="price"
          pattern="^[1-9]\d*(\.\d+)?$"
          name="price"
          required
        />
        {/* Drop down */}
        <label>Product type:</label>
        <select
          required
          id="productType"
          name="type"
          defaultValue={"Product"}
          onChange={(e) => {
            const selected = e.target.value;
            setSelectedType(selected);
          }}
          className="dropdown-select">
          <option value="Product" disabled hidden>
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

        {/* Dynamic type info */}
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
        ) : selectedType === "Furniture" ? (
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
        ) : selectedType === "Book" ? (
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
