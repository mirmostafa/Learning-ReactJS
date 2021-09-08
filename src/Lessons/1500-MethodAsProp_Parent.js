import React, { Component } from 'react'
import MethodAsProp_Child from './1500-MethodAsProp_Child';

class MethodAsProp_Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'MethodAsProp_Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(childName) {
        alert(`Hello '${this.state.parentName}' from '${childName}'.`);
    }

    render() {
        return (
            <div>
                <MethodAsProp_Child greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default MethodAsProp_Parent
