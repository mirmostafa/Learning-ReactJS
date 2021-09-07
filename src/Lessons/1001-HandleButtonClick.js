import React, { Component } from 'react'

export default class HandleButtonClick extends Component {
    constructor(){
        super();
        this.state = {
            message : 'Wellome. Please click subscribe.'
        };
    }
    
    subscribeBurronOnClick = () => this.setState({ message : 'Thank you for subscribing. 🙏' });

    render = () => (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ this.subscribeBurronOnClick }>Subscrive</button>
            </div>
        );
}
