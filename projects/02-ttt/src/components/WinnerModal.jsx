import { Square } from './index'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return

  const winnerText = winner === false ? 'Tie' : 'Winner'

  return (
    // {winner !== null && ( // The && is not an AND opperator, on JSX this means that if the thing at the left evaluates as true, the right side will be rendered
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header>{winner && <Square className='win'>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Start again</button>
        </footer>
      </div>
    </section>
    // )}
  )
}
