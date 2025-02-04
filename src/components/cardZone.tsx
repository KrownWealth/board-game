import React from "react";
import Deck from "./deck";
import { Card } from "types/card";
import { jinzoMonsterCard, trapCard, darkHoleSpell } from "@/constants/cardData";
interface CardZoneProps {
  cards: Card[];
}

const CardZone: React.FC<CardZoneProps> = () => {
  return (
    <div
      className="h-full grid gap-2"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        transform: "perspective(1000px) rotateX(75deg) scale(0.6) translate(0, -350px)",
        transition: "transform 0.5s",
      }}
    >
      {Array.from({ length: 30 }).map((_, index) => {
        let gridArea: string | undefined;

        // Define grid areas for decks
        if (index === 0) {
          gridArea = "1 / 1";
        } else if (index === 1) {
          gridArea = "2 / 1";
        } else if (index === 2) {
          gridArea = "3 / 1";
        } else if (index === 17) {
          gridArea = "3 / 7";
        } else if (index === 24) {
          gridArea = "4 / 7";
        } else if (index === 29) {
          gridArea = "5 / 7";
        }

        return (
          <div
            key={index}
            style={{
              gridArea: gridArea,
            }}
            className="border-2 rounded-[5px] bg-transparent border-gray-400 shadow-lg items-center justify-center p-2"
          >
            {index === 0 && <Deck card={jinzoMonsterCard} size={10} />}
            {index === 1 && <Deck card={jinzoMonsterCard} size={52} />}
            {index === 2 && <Deck card={jinzoMonsterCard} size={15} />}
            {index === 17 && <Deck card={darkHoleSpell} size={20} />}
            {index === 24 && <Deck card={darkHoleSpell} size={52} />}
            {index === 29 && <Deck card={trapCard} size={15} />}
            {!gridArea && index < 30 && (
              <div className="border-4 rounded-[5px] bg-white h-[242px] w-[164px]" />

            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardZone;
