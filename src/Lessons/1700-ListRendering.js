import React from 'react'
import RenderPerson from './1700-ListRendering.item';

function ListRendering() {
    const names = [{name:'Mohammad'}, {name:'Ala'}, {name:'Abba$'}];
    //const nameGridHtml = names.map(x => <h1>{x}</h1>);
    const nameGridHtml = names.map(x => RenderPerson(x));
    return (        
        <div>
            {nameGridHtml}
        </div>
    );
}

export default ListRendering;