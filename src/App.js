import { Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}>
        <Route path="/add-product" exact element={<AddProduct />} />
        <Route path="/*" exact element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
