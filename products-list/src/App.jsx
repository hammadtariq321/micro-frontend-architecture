import React from "react";
import "./index.scss";
import ProductCard from "./components/ProductCard";
import { ProductsMocData } from "./moc-data/ProductsMocData";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";

const App = () => {

  return <div className="">
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path=":productId" element={<ProductDetail />} />
    </Routes>
  </div>
};

export default App;
