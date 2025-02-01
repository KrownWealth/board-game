import React from "react";
import CardComponent from "./components/card";
import PlayingField from "./components/game/playingField";
import { MonsterCard, SpellCard, TrapCard } from "../types/card";
import { jinzoMonsterCard, darkHoleSpell, trapCard } from "./constants/cardData";

interface HandFieldProps {
  opponentHand: Array<MonsterCard | SpellCard | TrapCard>;
  playerHand: Array<MonsterCard | SpellCard | TrapCard>;
}

const HandField: React.FC<HandFieldProps> = ({ opponentHand, playerHand }) => {
  const renderCards = (cards: Array<MonsterCard | SpellCard | TrapCard>, isPlayerHand: boolean) => (
    <div className={`flex ${isPlayerHand ? "gap-2 -top-8" : ""}`}>
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} isFlippable={isPlayerHand} isDeck={!isPlayerHand} />
      ))}
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-200 to-blue-100 flex flex-col justify-between items-center overflow-hidden">
      <div className="flex-grow-0 card-container">
        {renderCards(opponentHand, false)}
      </div>

      <div className="flex-grow flex items-center justify-center w-full">
        <PlayingField />
      </div>

      <div className="flex-grow-0 player-container">
        {renderCards(playerHand, true)}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const opponentHand = [jinzoMonsterCard, darkHoleSpell, trapCard, jinzoMonsterCard, darkHoleSpell];
  const playerHand = [darkHoleSpell, trapCard, jinzoMonsterCard, darkHoleSpell, trapCard];

  return <HandField opponentHand={opponentHand} playerHand={playerHand} />;
};

export default App;
