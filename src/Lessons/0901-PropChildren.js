import React from "react";

const PropsChildren = props => {
    console.log({ props });
    return (
    <div>
      <h1>Hello to children</h1> {props.children} <h1>from daddy</h1>
    </div>
    );
}

export default PropsChildren;