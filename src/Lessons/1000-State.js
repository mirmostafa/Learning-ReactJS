import React, { Component } from 'react'

export class HelloFromStateClass extends Component {
    constructor(){
        super();
        this.state = {
            myClassName: "State Class"
        };
    }

    render = () => (<h1>Hello from {this.state.myClassName}.</h1>);
}
export default HelloFromStateClass;