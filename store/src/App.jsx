import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { store } from "./store";
import { Provider } from "react-redux";
import ArticlesPage from "./ArticlesPage";
const App = () => (
  <Provider store={store}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <ArticlesPage />
      <div>Name: store</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </Provider>

);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)