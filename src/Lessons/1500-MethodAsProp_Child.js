import React from 'react'

function MethodAsProp_Child(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={()=>props.greetHandler('MethodAsProp_Child')}>Greet Parent</button>
        </div>
    )
}

export default MethodAsProp_Child
