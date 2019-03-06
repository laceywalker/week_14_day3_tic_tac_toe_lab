import React, {Component} from "react";
import TableComponent from "../components/TableComponent";


class TicTacToeContainer extends Component {
constructor(props){
    super(props)
    this.state = {
            gameGrid:["B", "B", "B", "B", "B", "B", "B", "B", "B"],
            gameOver: false
    }
    this.checkTriple = this.checkTriple.bind(this)
    this.handleSelectedSquare = this.handleSelectedSquare.bind(this);
}

// xMoves(gridRef) 

// oMoves(gridRef)

checkGame(){
    const winConfig = [
                [0,1,2], 
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
    
    for (let config of winConfig){
        if (this.checkTriple(config)){
            return true

        }
    }       
    
    return false
}

checkTriple(config){
    return ((this.state.gameGrid[config[0]]===this.state.gameGrid[config[1]]) && 
            (this.state.gameGrid[config[1]]===this.state.gameGrid[config[2]]) && 
            this.state.gameGrid[config[2]]!=="B")
}

handleSelectedSquare(letter){
    
}





render(){
    console.log(this.checkGame())
    return(
    <div>
    <h1>Tic Tac Toe</h1> 
    <TableComponent squares={this.state.gameGrid} onClick={this.handleSelectedSquare}/> 
    
    </div>
    )
}

}

export default TicTacToeContainer;


