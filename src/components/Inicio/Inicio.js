import React, { Component } from "react";
class Inicio extends Component{
    constructor(props) {
        super(props);
        this.state = {
          changeCompt: 0
        };
      }
    render(){
        return(
            <div>
                <h1>INICIO</h1>
            </div>

        );
    }
}
export default Inicio;