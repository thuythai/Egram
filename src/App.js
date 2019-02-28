import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
          <div style={{marginTop:50}}></div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
