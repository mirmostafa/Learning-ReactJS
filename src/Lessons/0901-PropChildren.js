import React from "react";

const PropsChildren = props => {
    console.log({ props });
    return (<h1>Hello {props.children} from Children</h1>);
}

export default PropsChildren;