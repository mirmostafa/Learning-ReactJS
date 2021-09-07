import React, { Component } from 'react'

export const Destructure1 = ({fName, lName}) => <h1>Hello {lName} {fName} from arrow function</h1>

export const Destructure2 = props => {
    const {fName, lName} = props;
    return (<h1>Hello {lName} {fName} from function</h1>);
}

export class Destructure3 extends Component {
    render() {
        const {fName, lName} = this.props;
        // ! Same:
        //const {state1, state2} = this.state;
        return (<h1>Hello {lName} {fName} class</h1>);
    }
}