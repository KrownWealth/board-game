import React from "react";
import CardComponent from "./card";
import { Card } from "types/card";

interface DeckPilesProps {
  card: Card;
  size: number;
  isFaceUp: boolean;
  isOpponent?: boolean;
}

const DeckPiles: React.FC<DeckPilesProps> = ({ card, size, isFaceUp, isOpponent = false }) => {
  return (
    <div
      className="relative w-[154px] h-[242px] perspective-[600px] flex justify-center items-center"

    >
      {Array.from({ length: size }).map((_, index) => (
        <div
          key={index}
          className="absolute w-full h-full"
          style={{
            top: `${index * 1.5}px`,
            [isOpponent ? "right" : "left"]: `${index * 0.2}px`,
            zIndex: index,
            transformOrigin: "center center",
            transform: `translateY(-${index * 2}px) rotateX(${isOpponent ? "-10deg" : "10deg"}) 
            rotateY(${isOpponent ? "-5deg" : "5deg"}) rotate(${isOpponent ? "180deg" : "0deg"})`,
          }}
        >
          <CardComponent card={card} width="100%" height="100%" isFaceUp={isFaceUp} />
        </div>
      ))}
    </div>
  );
};

export default DeckPiles;
