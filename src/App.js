import { Outlet, Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";
function App() {
  return (
    <Routes>
      <Route path="scandiweb-product-page">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/add-product">
          <AddProduct />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
        <Outlet />
      </Route>
    </Routes>
  );
}

export default App;
