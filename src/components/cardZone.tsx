import React from "react";
import { Card } from "types/card";
import { jinzoMonsterCard, trapCard, darkHoleSpell } from "@/constants/cardData";
import CardComponent from "./card";
import DeckPiles from "./deckPiles";

interface CardZoneProps {
  cards: Card[];
}

const CardZone: React.FC<CardZoneProps> = () => {
  return (
    <div
      className="h-full"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        columnGap: "1vw",
        rowGap: "4vw",
        transform: "perspective(1300px) rotateX(80deg) scale(0.5) translate(0, -140px)",
        transition: "transform 0.5s",
      }}
    >
      {Array.from({ length: 30 }).map((_, index) => {
        let gridArea: string | undefined;

        // Define grid areas for decks
        if (index === 0) gridArea = "1 / 1";
        if (index === 1) gridArea = "2 / 1";
        if (index === 2) gridArea = "3 / 1";
        if (index === 3) gridArea = "4 / 1";
        if (index === 4) gridArea = "5 / 1";

        if (index === 8) gridArea = "4 / 2";
        if (index === 12) gridArea = "4 / 3";
        if (index === 16) gridArea = "4 / 4";
        if (index === 15) gridArea = " 1 / 4"
        if (index === 19) gridArea = "3 / 5";
        if (index === 20) gridArea = "4 / 5";
        if (index === 23) gridArea = "4 / 6";


        if (index === 6) gridArea = "1/7";
        if (index === 13) gridArea = "2/7"
        if (index === 17) gridArea = "3 / 7";
        if (index === 24) gridArea = "4 / 7";
        if (index === 29) gridArea = "5 / 7";

        return (
          <div
            key={index}
            style={{
              gridArea,
              transform: "rotateY(50deg)"
            }}
            className="aspect-[0.7] border-2 rounded-[5px] bg-transparent border-gray-400 flex items-center justify-center p-2"
          >
            {index === 0 && <DeckPiles card={jinzoMonsterCard} size={70} isFaceUp={false} isOpponent={true} />}
            {index === 1 && <DeckPiles card={jinzoMonsterCard} size={40} isFaceUp isOpponent={true} />}
            {index === 2 && <DeckPiles card={jinzoMonsterCard} size={30} isFaceUp={false} isOpponent />}
            {index === 3 && <DeckPiles card={jinzoMonsterCard} size={10} isFaceUp={false} isOpponent={true} />}
            {index === 4 && <DeckPiles card={jinzoMonsterCard} size={5} isFaceUp={false} isOpponent />}

            {index === 8 && <CardComponent card={jinzoMonsterCard} width="100%" height="100%" />}
            {index === 12 && <CardComponent card={darkHoleSpell} width="100%" height="100%" />}
            {index === 15 && <CardComponent card={trapCard} width="100%" height="100%" isOpponent />}
            {index === 16 && <CardComponent card={trapCard} width="100%" height="100%" />}
            {index === 20 && <CardComponent card={jinzoMonsterCard} width="100%" height="100%" />}
            {index === 19 && <CardComponent card={darkHoleSpell} width="100%" height="100%" isFaceUp={false} />}
            {index === 23 && <CardComponent card={darkHoleSpell} width="100%" height="100%" isFaceUp={false} />}

            {index === 6 && <DeckPiles card={trapCard} size={15} isFaceUp={false} />}
            {index === 13 && <DeckPiles card={jinzoMonsterCard} size={5} isFaceUp />}
            {index === 17 && <DeckPiles card={trapCard} size={15} isFaceUp={false} />}
            {index === 24 && <DeckPiles card={jinzoMonsterCard} size={62} isFaceUp />}
            {index === 29 && <DeckPiles card={trapCard} size={40} isFaceUp={false} />}
            {!gridArea && index < 30 && (
              <div className="border-4 rounded-[5px] bg-gray-200 h-full w-full" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardZone;
