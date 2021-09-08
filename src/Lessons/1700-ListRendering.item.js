import React from 'react'

//function RenderPerson(props) {
function RenderPerson({person}) {
    return (
        <div>
            <h1>Name: {person.name}</h1>
        </div>
    );
}

export default RenderPerson;
