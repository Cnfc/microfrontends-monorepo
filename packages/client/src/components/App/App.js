import React from "react";
import CartShow from "../CartShow/CartShow";
import ProductList from "../ProductList";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app_header">Learn React</header>
      <div className="main">
        <CartShow />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
