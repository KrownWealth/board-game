import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import DeckOpponent from './components/deck-manager/deckOpponent'
// import DeckPlayer from './components/deck-manager/deckPlayer'
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="w-full flex flex-row items-center justify-center h-screen p-12">
      <div className="w-full flex flex-row justify-between px-12">


        {/* <DeckOpponent /> */}


        <App />

        {/* <DeckPlayer /> */}
      </div>
    </main>

  </StrictMode>,
)
