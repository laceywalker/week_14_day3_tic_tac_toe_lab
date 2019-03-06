import React from 'react';


const TableComponent = ({squares}) => {

    function tdclick(e){
        console.log(e.target.id)
    }

    return(
    <table>
        <tr>
            <td id='0' onClick={tdclick}>{squares[0]}</td>
            <td id='1' onClick={tdclick}>{squares[1]}</td>
            <td id='2' onClick={tdclick}>{squares[2]}</td>
        </tr> 
        <tr>
            <td id='3' onClick={tdclick}>{squares[3]}</td>
            <td id='4' onClick={tdclick}>{squares[4]}</td>
            <td id='5' onClick={tdclick}>{squares[5]}</td>
        </tr>
        <tr>
            <td id='6' onClick={tdclick}>{squares[6]}</td>
            <td id='7' onClick={tdclick}>{squares[7]}</td>
            <td id='8' onClick={tdclick}>{squares[8]}</td>
        </tr>

    </table>

    )

    

}

export default TableComponent;