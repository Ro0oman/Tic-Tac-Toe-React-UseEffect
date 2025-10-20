import { useState } from "react"
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./constants.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { checkWinnerFrom } from "./logic/board.js"


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)


  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      console.log(1);
      setWinner(newWinner)
      confetti()
    }else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board ">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetBoard}>Restart</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square 
              key={index}  
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
         <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal winner={winner} resetBoard={resetBoard}/>
    </main>
  )
}

export default App
