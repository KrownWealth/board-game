import React from "react";
import CardComponent from "./card";
import { MonsterCard, TrapCard, SpellCard } from "types/card";

interface PlayerHandProps {
  playerHand: Array<MonsterCard | SpellCard | TrapCard | SpellCard | MonsterCard>;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ playerHand }) => {
  return (
    <div className="absolute bottom-0 flex flex-row justify-center gap-2 w-full">
      {playerHand.map((card) => (
        <CardComponent key={card.id} card={card} isFlippable isDeck={false} />
      ))}
    </div>
  );
};

export default PlayerHand;
