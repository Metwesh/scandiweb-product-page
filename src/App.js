import { Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="add-product" exact={true} element={<AddProduct />} />
      <Route path="*" exact={true} element={<Error404 />} />
    </Routes>
  );
}

export default App;
