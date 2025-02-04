import React from "react";
import CardComponent from "./card";
import { MonsterCard, TrapCard, SpellCard } from "types/card";

interface OpponentHandProps {
  opponentHand: Array<MonsterCard | SpellCard | TrapCard>;
}

const OpponentHand: React.FC<OpponentHandProps> = ({ opponentHand }) => {
  return (
    <div className="absolute top-0 flex flex-row justify-center gap-2 w-full">
      {opponentHand.map((card) => (
        <CardComponent key={card.id} card={card} isFlippable={false} isDeck={true} />
      ))}
    </div>
  );
};

export default OpponentHand;
