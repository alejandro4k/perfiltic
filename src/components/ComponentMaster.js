/* eslint-disable default-case */
import React, { Component } from "react";
import Inicio from "./Inicio/Inicio"
class ComponentMaster extends Component {
    constructor(props) {
      super(props);
      this.state = {
        changeCompt: 0
      };
    }
    
  showComponent = () => {
    switch (this.state.changeCompt) {
      case 0:
        return <Inicio/>;
        break;
     
    }
  };

  render() {
    return <div className="mainComponent">{this.showComponent()}</div>;
  }
}
export default ComponentMaster;