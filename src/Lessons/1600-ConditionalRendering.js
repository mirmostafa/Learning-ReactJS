import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             isLoggedIn : false
        };
    }
    
    render() {
        if(this.state.isLoggedIn)
            return (
                <div>
                    Wellcome Mohammad
                </div>
            );
        else
            return (
                <div>
                    Wellcome Guest
                </div>
            );
    }
}

export default ConditionalRendering
