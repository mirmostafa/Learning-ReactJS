import React, { Component } from 'react'

export default class CuncorrentCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increase = () => this.setState(prevState => ({ count : prevState.count + 1 }), () => console.log(this.state));
    
    increaseFive() {
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }

    render = () => (
            <div>
                <div>Counter: {this.state.count}</div>
                {/* Note: Calling this.increase as a delegate, will couse this.increase to be called statically. */}
                <button onClick = {() => this.increaseFive()}>Increase</button>
            </div>
        );
}