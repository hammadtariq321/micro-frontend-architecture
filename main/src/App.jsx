import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import AppContainer from "./AppContainer";
import { StoreProvider } from "store/store";
// const RemoteProductList = React.lazy(() => import("products/ProductsList"));

const RemoteProductList = React.lazy(() =>
  import('products/ProductApp').catch(error => console.error('Failed to load component', error))
);
const RemotePostsList = React.lazy(() =>
  import('posts/PostsApp').catch(error => console.error('Failed to load component', error))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/products/*",
        element: <Suspense>
          <RemoteProductList />
        </Suspense>
      },
      {
        path: "/posts/*",
        element: <Suspense>
          <RemotePostsList />
        </Suspense>
      },
    ],
  },
]);
const App = () => (
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)