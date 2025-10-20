const TURNS = {
  x: '❌',
  o: '⭕'
}

const board = Array(9).fill(null)

function App() {

  return (
    <main className="board ">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <div key={index} className="cell">
                <span className="cell__content">
                  {index}
                </span>
              </div>
            )
          })
        }

      </section>
    </main>
  )
}

export default App
