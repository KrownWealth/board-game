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
      className={`absolute w-full flex flex-row justify-center ${isOpponent ? "top-0 gap-0 aspect-[0.7]" : "bottom-0 gap-2 aspect-none"}`}
      style={{ zIndex: 10 }}
    >
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          isFaceUp={!isOpponent}
          isInCardZone={false}
          // width="154px"
          // height="242px"
          width={isOpponent ? "80px" : "154px"}
          height={isOpponent ? "120px" : "220px"}
        />
      ))}
    </div>
  );
};
;

export default Hand;
