import React from 'react'
import RenderPerson from './1700-ListRendering.item';

function ListRenderingWithIndex() {
    const people = [{name:'Mohammad'}, {name:'Ala'}, {name:'Abba$'}];
    const personGridHtml = people.map((x, index) => <h1 key={index}> index={index} person={x.name}</h1>);
    return (        
        <div>
            {personGridHtml}
        </div>
    );
}

export default ListRenderingWithIndex;