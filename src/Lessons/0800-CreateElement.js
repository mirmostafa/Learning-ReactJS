import React from "react";

const CreateElementTest = () => {
    return React.createElement("h1", null, "Hello by", React.createElement("div", {
        style: {
            color: 'red'
        }
    }, "createElement"));
}

export default CreateElementTest;