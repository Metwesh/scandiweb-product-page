import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter basename="/scandiweb-product-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/*" exact element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
