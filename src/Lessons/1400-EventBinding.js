import React, {Component} from 'react'

class EventBinding extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello👋'
        };
        
        // Approach 3: Phase 1 (Better performance)
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.setState({message : 'Good bye🙋‍♀️'});
    }

    // Approach 4: Phase 1
    buttonClickAsProp = () => {
        this.setState({message : 'Good bye🙋‍♀️'});
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* 'this' is 'undefined' */}
                {/* <button onClick={this.buttonClick}>Click me</button> */}
                
                {/* Approach 1 */}
                {/* <button onClick={this.buttonClick.bind(this)}>Click me</button> */}
                
                {/* Approach 2 */}
                {/* <button onClick={() => this.buttonClick()}>Click me</button> */}
                
                {/* Approach 3: Phase 2 */}
                {/* <button onClick={this.buttonClick}>Click me</button> */}

                {/* Approach 4: Phase 1 */}
                <button onClick={this.buttonClickAsProp}>Click me</button>

            </div>
        );
    }
}

export default EventBinding