import { WINNER_COMBOS, TURNS } from '../constants'
import confetti from 'canvas-confetti'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (lastBoard) => {
  return lastBoard.every((square) => square !== null)
}

export const resetGame = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

export const updateBoard = (index, turn, board, winner, setBoard, setTurn, setWinner) => {
  if (board[index] || winner) return

  const newBoard = [...board]
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

  newBoard[index] = turn
  setBoard(newBoard)
  setTurn(newTurn)

  const newWinner = checkWinnerFrom(newBoard)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false)
  }
}
