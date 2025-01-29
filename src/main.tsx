import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import DeckOpponent from './components/deck-manager/deckOpponent'
import App from './App'
import Deck from './components/deck-manager/deckPlayer'
import DeckPlayer from './components/deck-manager/deckPlayer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="w-full flex flex-row items-center justify-center h-screen p-12">
      <div className="w-full flex flex-row justify-between px-12">


        {/* <DeckOpponent /> */}


        <App />

        <DeckPlayer />
      </div>
    </main>

  </StrictMode>,
)
