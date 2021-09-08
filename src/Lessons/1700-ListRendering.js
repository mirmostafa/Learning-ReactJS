import React from 'react'
import RenderPerson from './1700-ListRendering.item';

function ListRendering() {
    const people = [{id:1, name:'Mohammad'}, {id:2, name:'Ala'}, {id:3, name:'Abba$'}];
    //const nameGridHtml = names.map(x => <h1>{x}</h1>);
    const personGridHtml = people.map(x => <RenderPerson person={x} key={x.id} />);
    return (        
        <div>
            {personGridHtml}
        </div>
    );
}

export default ListRendering;