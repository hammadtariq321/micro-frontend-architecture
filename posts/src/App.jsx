import React from "react";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetail from "./pages/PostDetail";

const App = () => {

  return <div className="">
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path=":postId" element={<PostDetail />} />
    </Routes>
  </div>
};

export default App;
