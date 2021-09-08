import React, { Component } from 'react'

class ButtonClickClass extends Component {
    buttonOnClick(){
        console.log('Button clicked within the class.');
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonOnClick}>Click me in a class</button>
            </div>
        )
    }
}

export default ButtonClickClass
