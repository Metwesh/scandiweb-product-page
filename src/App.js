import { Route, Routes } from "react-router-dom";
import AddProduct from "./routes/AddProduct";
import Error404 from "./components/Error404";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route
        path="scandiweb-product-page"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={<Home />} />
            <Route path={`${url}/add-product`} component={<AddProduct />} />
            <Route path={`${url}/*`} component={<Error404 />} />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
