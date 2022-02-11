import { Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="scandiweb-product-page/" element={<Home />} />
      <Route
        path="scandiweb-product-page/add-product"
        element={<AddProduct />}
      />
      <Route path="scandiweb-product-page/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
