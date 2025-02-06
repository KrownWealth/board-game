import React from "react";
import CardComponent from "./card";
import { Card } from "types/card";

interface DeckProps {
  card: Card;
  size: number;
}

const Deck: React.FC<DeckProps> = ({ card, size }) => {
  return (
    <div className="relative w-[154px] h-[242px] perspective-[600px] flex justify-center items-center">
      {Array.from({ length: size }).map((_, index) => (
        <div
          key={index}
          className="absolute w-full h-full"
          style={{
            top: `${index * 1.5}px`,
            left: `${index * 0.2}px`,
            zIndex: index,
            transformOrigin: "center center",
            transform: `translateY(-${index * 2}px) rotateX(10deg) rotateY(-5deg)`,
          }}
        >
          <CardComponent card={card} width="100%" height="100%" isFaceUp={false} />
        </div>
      ))}
    </div>
  );
};

export default Deck;
