import React, { Component } from "react";


class Hello2 extends Component {
    // this.props is immutable
    render() {
        return <h1>Hello {this.props.name} from props in class</h1>
    }
}


export default Hello2