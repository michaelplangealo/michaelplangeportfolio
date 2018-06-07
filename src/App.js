import React, { Component } from "react";
import routes from "./routes";
import LinkedUp from "./Styled/LinksBar.js";

class App extends Component {
  render() {
    return (
      <div>
        <LinkedUp />
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
