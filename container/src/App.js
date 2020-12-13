import React from "react";

import MarketingApp from "./components/MarketingApp";

const App = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Header Name From Main Frontend
      </h1>
      <h4 style={{ display: "flex", justifyContent: "center" }}>Main Page</h4>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
