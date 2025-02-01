import { jinzoMonsterCard, darkHoleSpell, trapCard } from "@/constants/cardData";
import "./deck.css";
import CardComponent from "../card";

const DeckField = ({ role }: { role: "player" | "opponent" }) => {
  const isPlayer = role === "player";

  // Define the card arrays for each pile
  const baseDeck = [jinzoMonsterCard, darkHoleSpell, trapCard];

  const fullDeck = Array.from({ length: 8 }, (_, i) => baseDeck[i % baseDeck.length]);

  const baseGraveYardPile = [jinzoMonsterCard, darkHoleSpell, trapCard];
  const fullGraveYardPile = Array.from({ length: 19 }, (_, i) => baseGraveYardPile[i % baseGraveYardPile.length]);

  const baseBanishedPiles = [jinzoMonsterCard, darkHoleSpell, trapCard];
  const fullBanishedPiles = Array.from({ length: 8 }, (_, i) => baseBanishedPiles[i % baseBanishedPiles.length]);

  const transformStyles = {
    player: "perspective(1000px) rotateX(75deg) rotateZ(-4deg) translate(0px, -400px)",
    opponent: "perspective(1000px) rotateX(250deg) rotateZ(-4deg) translate(0px, 320px)",
  };


  const renderCardPile = (cards: any[], keyPrefix: string) => (
    <div className="container-deck">
      <div className="deck">
        {cards.map((card, index) => (
          <div
            key={`${keyPrefix}-${index}`}
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

  const renderCards = (cards: any[]) =>
    cards.map((card, index) => (
      <div
        key={index}
        className="flex justify-center items-center border-2 rounded-lg border-gray-300 shadow-lg p-4"
      >
        <CardComponent card={card} isFlippable={false} />
      </div>
    ));

  return (
    <div
      className="flex flex-col items-center p-8"
      style={{ transform: transformStyles[role], transition: "transform 0.5s" }}
    >
      <div className="flex flex-col justify-center items-center gap-4 relative" style={{ transform: "rotateY(50deg)" }}>

        <div className="grid grid-rows-2 justify-center gap-8 mb-20">
          {renderCards(baseDeck.slice(0, 2))}
        </div>

        {/* Divider */}
        <div className="w-full border-t-2 border-gray-500 my-6 opacity-70"></div>

        {/* Second Row (3 Piles) */}
        <div className="grid grid-rows-3 justify-center"
          style={isPlayer ? {} : { transform: "rotateX(180deg) translate(0px, 0px)" }}>
          <div className="flex justify-center rounded-lg border-gray-300 shadow-lg p-4">{renderCardPile(fullBanishedPiles, "banished")}</div>
          <div className="flex justify-center mt-8 rounded-lg border-gray-300 shadow-lg p-4">{renderCardPile(fullGraveYardPile, "graveyard")}</div>
          <div className="flex justify-center mt-28 rounded-lg border-gray-300 shadow-lg p-4">{renderCardPile(fullDeck, "fullDeck")}</div>
        </div>
      </div>
    </div>
  );
};

export default DeckField;
