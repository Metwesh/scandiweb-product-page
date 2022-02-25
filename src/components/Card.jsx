import { useState } from "react";
import { currencyFormatter } from "../utils";

export default function Card({
  sku,
  name,
  price,
  type,
  description,
  setChecked,
  setCheckError,
}) {
  const [cardColor, setCardColor] = useState("");
  return (
    <div className={`card${cardColor}`}>
      <input
        type="checkbox"
        name="sku[]"
        id={sku}
        value={sku}
        form="delete-product-form"
        className="delete-checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            setChecked(true);
            setCheckError(false);
          } else {
            setChecked(false);
            setCheckError(null);
          }
          cardColor === ""
            ? setCardColor(" checkbox-selected")
            : setCardColor("");
        }}
      />

      <p className="product-info">{sku}</p>
      <p className="product-info">{name}</p>
      <p className="product-info">{currencyFormatter.format(price)}</p>
      <p className="product-info">{description}</p>
    </div>
  );
}
