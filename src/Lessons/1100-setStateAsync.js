import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increase() {
        this.setState({
            count : this.state.count + 1 
        }, () => console.log(this.state));
    }

    render() {
        return (
            <div>
                <div>Counter: {this.state.count}</div>
                {/* Note: Calling this.increase as a delegate, will couse this.increase to be called statically. */}
                <button onClick = {() => this.increase()}>Increase</button>
            </div>
        );
    }
}