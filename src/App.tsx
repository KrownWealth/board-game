import React from "react";

import Hand from "./components/hand";
import { jinzoMonsterCard, trapCard, darkHoleSpell } from "./constants/cardData";
import "./App.css";
import CardZone from "./components/cardZone";


const cards = [jinzoMonsterCard, trapCard, darkHoleSpell, jinzoMonsterCard, trapCard];

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full justify-center items-start overflow-hidden">
      <Hand cards={cards} isOpponent={true} />
      <CardZone cards={cards} />
      <Hand cards={cards} isOpponent={false} />
    </div>
  );
};

export default App;
