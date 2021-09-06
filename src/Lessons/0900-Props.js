import React from "react";

const HelloProps = props => {
    console.log({ props });
    return <h1>Hello '{props.name}' from Props</h1>;
}

export default HelloProps;