import Card from "./Card";

export default function CardList({ products, setChecked, setCheckError }) {
  return (
    <>
      {products.map((_product, i) => {
        return (
          <Card
            key={i}
            sku={products[i].product_sku}
            name={products[i].product_name}
            price={products[i].product_price}
            type={products[i].product_type}
            description={products[i].product_desc}
            setChecked={setChecked}
            setCheckError={setCheckError}
          />
        );
      })}
    </>
  );
}
