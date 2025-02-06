import React from "react";
import CardComponent from "./card";
import { MonsterCard, TrapCard, SpellCard } from "types/card";

interface HandProps {
  cards: Array<MonsterCard | SpellCard | TrapCard>;
  isOpponent: boolean;
}

const Hand: React.FC<HandProps> = ({ cards, isOpponent }) => {
  return (
    <div
      className={`absolute w-full flex flex-row justify-center ${isOpponent ? "top-0" : "bottom-0 gap-2"}`}
    >
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          isFaceUp={!isOpponent}
          isInCardZone={false}
          width="154px"
          height="242px"
        />
      ))}
    </div>
  );
};

export default Hand;
