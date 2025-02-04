import React, { useState } from "react";
import { Card, CardType } from "../../types/card";

interface CardProps {
  card?: Card;
  isFlippable?: boolean;
  isDeck?: boolean;
}

const CardComponent: React.FC<CardProps> = ({ card, isFlippable = true, isDeck = true }) => {
  if (!card) {
    return <div>Card not found</div>;
  }

  const { name, templateImage, frontImage, backImage, description, type } = card;
  const [isFlipped, setIsFlipped] = useState(isDeck);

  const handleClick = () => {
    if (isFlippable) {
      setIsFlipped((prev) => !prev);
    }
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

  return (
    <div
      onClick={handleClick}
      className={`relative card ${isFlipped ? 'flipped' : ''}`}
      role="button"
      aria-labelledby={`card-title-${name}`}
    >
      <div className="front-side">
        <img src={templateImage} alt={`${name} template`} />
        <div className={`absolute top-[4.5%] ${getCardTitleLeftPosition(type)} transform -translate-x-1/2 text-start text-xs font-bold uppercase text-black`}>
          {name}
        </div>

        {/* Card Image */}
        <div className="absolute top-[16%] left-[10%] w-[80%] h-[50%]">
          <img src={frontImage} alt="Card Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Card Description */}
        <div className="card-description absolute top-[70%] left-[10%] w-[80%] h-[40%]">
          <p>{description}</p>
        </div>
      </div>

      <div className="back-side absolute top-0 ">
        <img src={backImage} alt={`${name} back`} />
      </div>
    </div>
  );
};

export default CardComponent;
