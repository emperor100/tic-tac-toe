import React from 'react'
import Square from '../Square/Square'

export default class Board extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      turn: true,
      winner: null,
      timer: 2,
      gameStarted: false,
      gameTerminated: false
    }
  }

  flush () {
    this.setState({
      turn: true,
      timer: 2,
      gameStarted: false,
      gameTerminated: true
    })
  }

  chooseIndexOfComputer(squares) {
    while (true) {
      const id = Math.floor(Math.random() * 10)
      if (squares [id] === null) {
        squares[id] = 'O';
        this.setState({
          squares: squares
        })
        return id
      }
    }
  }

  whoIsWinner (turn, squares) {
    const winCom = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    const symb = turn ? 'X' : 'O'

    for (let wc in winCom) {
      const wca = winCom[wc].slice();
      if (squares[wca[0]] === symb && squares[wca[1]] === symb && squares[wca[2]] === symb) {
        console.log("Winner")
        return symb
      }
    }

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        return null
      }
    }
    return 'draw'
  }

  gameTerminated (turn, squares) {
    if (this.state.timer <= 0) {
      this.setState({
        winner: 'You Lost',
        gameTerminated: true
      })
      this.flush()
    }
    const winnerSym = this.whoIsWinner(turn, squares)
    if (winnerSym === 'draw') {
      this.setState({
        winner: 'Its a Draw',
        gameTerminated: true
      })
      this.flush()
    } else if (winnerSym === 'X') {
      this.setState({
        winner: 'Congrats You are the winner',
        gameTerminated: true
      })
      this.flush()
    } else if (winnerSym === 'O') {
      this.setState({
        winner: 'You Lost',
        gameTerminated: true
      })
      this.flush()
    }

  }

  handleClick (i) {

    if(this.state.gameTerminated) {
      return
    }
    const squares = this.state.squares.slice()
    let turn = this.state.turn
    if (squares[i] === null) {
      turn = !turn
      squares[i] = this.state.turn ? 'X' : 'O'
    } else {
      return
    }

    if (!this.state.gameStarted) {
      for (let i = 0; i < 9; i++) {
        if (squares[i]) {
          this.setState({
            gameStarted: true
          })
          console.log(this.state.gameStarted)
          break
        }
      }
    }

    if (this.state.gameStarted) {
      this.setState({
        timer: 2
      })
    }
    this.setState({
        squares: squares,
        turn: turn,
      }
    )
    this.gameTerminated(!turn, squares)
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
        <div>
          <p>
            Time left {this.state.timer} sec
          </p>
        </div>
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
