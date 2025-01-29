import { useState } from "react";
import { jinzoMonsterCard, darkHoleSpell, trapCard } from "@/constants/cardData";
import "./deck.css"
import CardComponent from "../card";


const DeckPlayer = () => {
  const baseDeck = [jinzoMonsterCard, darkHoleSpell, trapCard];
  const fullDeck = Array.from({ length: 52 }, (_, i) => baseDeck[i % baseDeck.length]);

  const [deck, setDeck] = useState(fullDeck);

  return (
    <div
      className="flex flex-col items-center gap-8 p-8"
      style={{
        transform:
          "perspective(1000px) rotateX(60deg) rotateZ(-2deg) translate(0px, -40px)",
        transition: "transform 0.5s",
      }}
    >


      <div className="container-deck">
        <div className="deck" style={{ height: `${deck.length * 0.5}rem` }}>
          {deck.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="stacked-card"
              style={{
                "--i": index,
              } as React.CSSProperties}
            >
              <CardComponent card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckPlayer;
