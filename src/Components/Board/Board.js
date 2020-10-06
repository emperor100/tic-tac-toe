import React from 'react'
import Square from '../Square/Square'

export default class Board extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      turn: true,
      winner: null
    }
  }

  flush () {
    this.setState({
      squares: Array(9).fill(null),
      turn: true
    })
  }

  gameTerminated () {
    const squares = this.state.squares.slice()
    let counter = 0
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        counter++
      }
    }

    if (counter < 4) {
      this.setState({
        winner: "Winner is " +  (this.state.turn ? 'X' : 'O')
      })

      this.flush()
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    let turn = this.state.turn
    if (squares[i] === null) {
      turn = !turn
      squares[i] = this.state.turn ? 'X' : 'O'
    }
    this.setState({
        squares: squares,
        turn: turn,
      }
    )

    this.gameTerminated()
  }

  renderSquare (i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          {this.state.winner}
        </div>
      </div>
    )
  }

}
