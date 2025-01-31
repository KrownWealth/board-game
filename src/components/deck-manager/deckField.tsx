import { jinzoMonsterCard, darkHoleSpell } from "@/constants/cardData";
import "./deck.css";
import CardComponent from "../card";
import FieldCard from "../game/fieldCard";
import Deck from "./deck";

const DeckField = ({ role }: { role: "player" | "opponent" }) => {
  const isPlayer = role === "player";
  const baseDeck = [jinzoMonsterCard, darkHoleSpell];

  const transformStyles = {
    player:
      "perspective(1000px) rotateX(70deg) rotateZ(-4deg) translate(10px, -200px)",
    opponent:
      "perspective(1000px) rotateX(69deg) rotateY(180deg) rotateZ(-3deg) translate(10px, -100px)",
  };

  const renderCards = (cards: any[], additionalStyles = {}) =>
    cards.map((card, index) => (
      <div
        key={index}
        className="flex justify-center items-center border-2 rounded-lg border-gray-300 shadow-lg"
        style={additionalStyles}
      >
        <CardComponent card={card} isFlippable={false} />
      </div>
    ));

  return (
    <div
      className="flex flex-col items-center p-8"
      style={{ transform: transformStyles[role], transition: "transform 0.5s" }}
    >
      {isPlayer && (
        <div className="grid gap-4 grid-rows-2 mb-12">
          {renderCards(baseDeck)}
        </div>
      )}
      {!isPlayer && (
        <div className="grid grid-rows-3 gap-16">
          <FieldCard />
          <div
            className="relative"
            style={{
              transform:
                "perspective(1000px) rotateX(0deg) translate(-10px, 0px)",
              transition: "transform 0.5s",
            }}
          >
            <Deck />
          </div>
          <CardComponent card={jinzoMonsterCard} isFlippable={true} />
        </div>
      )}

      <div
        className={`grid ${isPlayer ? "grid-rows-3 gap-16" : "grid-rows-2 gap-16"
          }`}
      >
        {isPlayer ? (
          <>
            <CardComponent card={jinzoMonsterCard} isFlippable={false} />
            <div
              className="relative"
              style={{
                transform:
                  "perspective(1000px) rotateX(0deg) translate(5px, 50px)",
                transition: "transform 0.5s",
              }}
            >
              <Deck />
            </div>
            <FieldCard />
          </>
        ) : (
          <div className="grid gap-4 grid-rows-2 mt-12">
            {renderCards(baseDeck, {
              transform:
                "perspective(1000px) rotateX(180deg) translate(0px, 0px)",
              transition: "transform 0.5s",
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeckField;
