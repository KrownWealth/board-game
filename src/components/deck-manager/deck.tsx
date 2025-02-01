import { jinzoMonsterCard, darkHoleSpell, trapCard } from "@/constants/cardData";
import "./deck.css"
import CardComponent from "../card";



const Deck = () => {
  const baseDeck = [jinzoMonsterCard, darkHoleSpell, trapCard];
  const fullDeck = Array.from({ length: 10 }, (_, i) => baseDeck[i % baseDeck.length]);


  return (
    <div className="container-deck">
      <div className="deck" style={{ height: `${fullDeck.length * 0.5}rem` }}>
        {fullDeck.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="stacked-card"
            style={{
              "--i": index,
            } as React.CSSProperties}
          >
            <CardComponent card={card} isFlippable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
