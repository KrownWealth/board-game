import React from "react";
import CardZone from "./components/cardZone";
import OpponentHand from "./components/opponentHand";
import PlayerHand from "./components/playerHand";
import { jinzoMonsterCard, trapCard, darkHoleSpell } from "./constants/cardData";
import "./App.css";

const cards = [jinzoMonsterCard, trapCard, darkHoleSpell, jinzoMonsterCard, trapCard];

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full p-4 justify-center items-start overflow-hidden">
      <OpponentHand opponentHand={cards} />
      <CardZone cards={cards} />
      <PlayerHand playerHand={cards} />
    </div>
  );
};

export default App;
