import React from 'react'

function PersonTable() {
    const ppl = [{id : 0, Name : "Ali", Age : 5}, {id : 0, Name : "Mohammad", Age : 15}, {id : 0, Name : "Reza", Age : 25} , {id : 0, Name : "Gholi", Age : 35}];
    const pplInnerHtml = ppl.map(x => 
        <tr>
            <td>{x.id}</td>
            <td>{x.Name}</td>
            <td>{x.Age}</td>
        </tr>
    );
    const result = (<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    {pplInnerHtml}
</table>);
    return result;
}

export default PersonTable;
