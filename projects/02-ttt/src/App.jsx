import { useState } from 'react'
import { WinnerModal, Turn, Board } from './components'
import { TURNS } from './constants'
import { resetGame, updateBoard } from './logic'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const handleResetGame = () => {
    resetGame(setBoard, setTurn, setWinner)
  }

  const handleUpdateBoard = (index) => {
    updateBoard(index, turn, board, winner, setBoard, setTurn, setWinner)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={handleResetGame}>Reset Game</button>
      <Board board={board} handleUpdateBoard={handleUpdateBoard} />
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetGame={handleResetGame} />
    </main>
  )
}

export default App
