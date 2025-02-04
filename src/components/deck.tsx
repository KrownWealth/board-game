import React from "react";
import CardComponent from "./card";
import { Card } from "types/card";

interface DeckProps {
  card: Card;
  size: number;
}

const Deck: React.FC<DeckProps> = ({ card, size }) => {
  return (
    <div className="relative w-[100px] h-[140px] perspective-[600px]">
      {Array.from({ length: size }).map((_, index) => (
        <div
          key={index}
          className="absolute w-full h-full"
          style={{
            top: `${index * 1.5}px`,
            left: `${index * 0.2}px`,
            zIndex: index,
            width: "120px",
            height: "180px",
            transformOrigin: "center center",
            transform: `translateY(-${index * 2}px) rotateX(10deg) rotateY(-5deg)`,
          }}
        >
          <CardComponent card={card} isFlippable={false} />
        </div>
      ))}
    </div>
  );
};

export default Deck;
