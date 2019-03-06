import React, {Component} from "react";
import TableComponent from "../components/TableComponent";


class TicTacToeContainer extends Component {
constructor(props){
    super(props)
    this.state = {
            gameGrid:["X", "O", "", "", "", "", "", "", "O"],
            playerX: [],
            playerO: [],
            gameOver: false
    }
    // this.onClick = this.onClick.bind(this);
}

// xMoves(gridRef) 

// oMoves(gridRef)

render(){
    return(
    <div>
    <h1>Tic Tac Toe</h1> 
    <TableComponent squares={this.state.gameGrid}/> 
    
    
        </div>
    )
}

}

export default TicTacToeContainer;


