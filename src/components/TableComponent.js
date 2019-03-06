import React from 'react';


const TableComponent = ({squares}) => {

    return(
    <table>
        <tr>
            <td>{squares[0]}</td>
            <td>{squares[1]}</td>
            <td>{squares[2]}</td>
        </tr>
        <tr>
            <td>{squares[3]}</td>
            <td>{squares[4]}</td>
            <td>{squares[5]}</td>
        </tr>
        <tr>
            <td>{squares[6]}</td>
            <td>{squares[7]}</td>
            <td>{squares[8]}</td>
        </tr>

    </table>

    )

}

export default TableComponent;