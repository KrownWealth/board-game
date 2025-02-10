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
      className="h-full w-full mx-auto justify-center"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        columnGap: "1vw",
        rowGap: "2vw",
        transform: "perspective(1500px) rotateX(65deg) scale(0.42) translate(15px, -620px)",
        transition: "transform 0.5s",
      }}
    >
      {Array.from({ length: 35 }).map((_, index) => {
        let gridArea: string | undefined;

        // Specific positions for the grid
        if (index === 0) gridArea = "1 / 1";
        if (index === 1) gridArea = "2 / 1";

        // Player Banished with rotation
        if (index === 2) gridArea = "3 / 1";
        if (index === 20) gridArea = "3 / 7";


        // Player Deck and Graveyard
        if (index === 29) gridArea = "5 / 7";
        if (index === 24) gridArea = "4 / 7";

        if (index === 6) gridArea = " 2 /7";
        if (index === 13) gridArea = "1 / 7";

        if (index === 21) gridArea = "4 / 1";
        if (index === 28) gridArea = "5 / 1";

        if (index === 3) gridArea = "1 / 4";
        if (index === 22) gridArea = "5 / 2";
        if (index === 30) gridArea = "5 / 3";
        if (index === 31) gridArea = "5 / 4";
        if (index === 32) gridArea = "5 / 5";
        if (index === 33) gridArea = "5 / 6";

        // Skip 5 Rows (Indexes from 15 to 19)
        if (index === 15 || index === 17 || index === 19) return <div key={index} className="bg-transparent" />;


        return (
          <div
            key={index}
            style={{
              gridArea,
              transform:
                index === 2 || index === 20 ? "rotate(90deg)" : "rotateY(50deg)",
            }}
            className="border-2 rounded-[5px] bg-transparent border-gray-400 flex items-center justify-center aspect-[0.7]"
          >
            {/* Deck Piles */}
            {index === 0 && <DeckPiles card={jinzoMonsterCard} size={70} isFaceUp={false} isOpponent />}
            {index === 29 && <DeckPiles card={trapCard} size={40} isFaceUp={false} />}

            {/* Graveyard Piles */}
            {index === 1 && <DeckPiles card={jinzoMonsterCard} size={40} isFaceUp isOpponent />}
            {index === 24 && <DeckPiles card={jinzoMonsterCard} size={62} isFaceUp />}

            {/* Banished Piles */}
            {index === 2 && <DeckPiles card={jinzoMonsterCard} size={5} isFaceUp={false} isOpponent />}
            {index === 20 && <DeckPiles card={jinzoMonsterCard} size={5} isFaceUp={false} isOpponent />}

            {index === 21 && <DeckPiles card={trapCard} size={5} isFaceUp={false} isOpponent />}
            {index === 28 && <DeckPiles card={trapCard} size={5} isFaceUp={false} isOpponent />}
            {index === 6 && <DeckPiles card={trapCard} size={5} isFaceUp={false} isOpponent />}
            {index === 13 && <DeckPiles card={trapCard} size={5} isFaceUp={false} isOpponent />}

            {index === 3 && <CardComponent card={darkHoleSpell} isFaceUp isOpponent />}
            {index === 22 && <CardComponent card={darkHoleSpell} isFaceUp />}
            {index === 30 && <CardComponent card={trapCard} isFaceUp />}
            {index === 31 && <CardComponent card={jinzoMonsterCard} isFaceUp />}
            {index === 32 && <CardComponent card={darkHoleSpell} isFaceUp />}
            {index === 33 && <CardComponent card={trapCard} isFaceUp />}

            {/* Default empty grid cells */}
            {!gridArea && <div className="bg-gray-200 h-full w-full" />}
          </div>
        );
      })}

    </div>
  );
};


export default CardZone;
