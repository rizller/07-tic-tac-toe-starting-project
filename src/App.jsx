
import Player from './components/Player'
import GameBoard from './components/GameBoardComponent'

function App() {
  
  return (
    <main>
      
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
      </div>
      <GameBoard />
     </main>
  )
}

export default App
