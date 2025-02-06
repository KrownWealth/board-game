import React, { useState } from "react";
import { Card, CardType, CardRotation } from "../../types/card";

interface CardProps {
  card?: Card;
  isFaceUp?: boolean;
  width?: string;
  height?: string;
  isOpponent?: boolean;
  isInCardZone?: boolean;
}

const rotationAngles: Record<CardRotation, number> = {
  [CardRotation.Up]: 0,
  [CardRotation.Right]: 90,
  [CardRotation.Down]: 180,
  [CardRotation.Left]: -90,
};

const CardComponent: React.FC<CardProps> = ({
  card,
  isFaceUp = true,
  width = "154px",
  height = "242px",
  isOpponent = false,
  isInCardZone = true,
}) => {
  if (!card) {
    return <div>Card not found</div>;
  }

  const { name, templateImage, frontImage, backImage, description, type } = card;
  const [rotation, setRotation] = useState<CardRotation>(CardRotation.Up);

  const handleRotation = () => {
    if (!isInCardZone) return;

    const rotations = Object.values(CardRotation);
    const currentIndex = rotations.indexOf(rotation);
    const nextIndex = (currentIndex + 1) % rotations.length;
    setRotation(rotations[nextIndex] as CardRotation);
  };

  const getCardTitleLeftPosition = (cardType?: CardType) => {
    switch (cardType) {
      case CardType.Spell:
        return "left-[30%]";
      case CardType.Trap:
        return "left-[36%]";
      case CardType.Monster:
        return "left-[20%]";
      default:
        return "left-[10%]";
    }
  };


  const adjustedRotation: CardRotation = isOpponent
    ? (rotation === CardRotation.Up ? CardRotation.Down :
      rotation === CardRotation.Right ? CardRotation.Left :
        rotation === CardRotation.Down ? CardRotation.Up :
          CardRotation.Right)
    : rotation;

  return (
    <div
      style={{
        transform: `rotate(${rotationAngles[adjustedRotation]}deg)`,
        transition: "transform 0.5s ease-in-out",
        width,
        height,
        zIndex: rotation === CardRotation.Up ? 1 : 0,
      }}
      onClick={handleRotation}
      className={`flex relative card items-center justify-center ${isInCardZone ? 'cursor-pointer' : 'cursor-default'}`}
      role="button"
      aria-labelledby={`card-title-${name}`}
    >
      {isFaceUp ? (
        <div className="front-side">
          <img src={templateImage} alt={`${name} template`} />
          <div className={`absolute top-[4.5%] ${getCardTitleLeftPosition(type)} transform -translate-x-1/2 text-start text-xs font-bold uppercase text-black`}>
            {name}
          </div>
          <div className="absolute top-[16%] left-[10%] w-[80%] h-[50%]">
            <img src={frontImage} alt="Card Illustration" className="w-full h-full object-cover" />
          </div>
          <div className="card-description absolute top-[70%] left-[10%] w-[80%] h-[40%]">
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="back-side">
          <img src={backImage} alt={`${name} back`} />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
