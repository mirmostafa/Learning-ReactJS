import React from 'react'

function ButtonClickHandleFunc() {
    
    const buttonClick = () => console.log('Button clicked.');
    
    return(<button onClick = {buttonClick}>Click Me!</button>);
}

export default ButtonClickHandleFunc
