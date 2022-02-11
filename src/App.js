import { Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/add-product">
        <AddProduct />
      </Route>
      <Route path="/*">
        <Error404 />
      </Route>
    </Routes>
  );
}

export default App;
