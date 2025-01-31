import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DeckField from './components/deck-manager/deckField';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="w-full flex flex-row items-center justify-center h-screen overflow-hidden p-12">
      <DeckField role="opponent" />
      <App />
      <DeckField role="player" />
    </main>
  </StrictMode>,
);
