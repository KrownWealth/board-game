import React, { useRef, useState } from "react";
import { Card } from "../../types/card";


interface CardProps {
  card?: Card;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  if (!card) {
    return <div>Card not found</div>;
  }

  const { name, type, description = "No description available.", frontImage, backImage, cardBgColor, descriptBgColor } = card;
  const [isFlipped, setIsFlipped] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current && !isFlipped) {
      cardRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current && !isFlipped) {
      const { clientHeight, clientWidth } = cardRef.current;
      const coefX = event.nativeEvent.offsetY / clientHeight;
      const coefY = event.nativeEvent.offsetX / clientWidth;

      const xRot = coefX * 20 - 10;
      const yRot = -(coefY * 20 - 10);

      cardRef.current.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
    }
  };

  const handleMouseOut = () => {
    if (cardRef.current && !isFlipped) {
      cardRef.current.style.transition = "transform 1s";
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  const handleClick = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.6s ease";
      cardRef.current.style.transform = isFlipped
        ? "rotateX(0deg) rotateY(0deg)"
        : "rotateY(180deg)";
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className={`relative card ${isFlipped ? 'flipped' : ''}`}
      role="button"
      aria-label={`Card: ${name}`}
      style={{ backgroundColor: `${cardBgColor}` }}

    >

      <div className="front-side">
        <div className="card-header" style={{ backgroundColor: `${cardBgColor}` }}>
          <h2 className="card-title">{name}</h2>
          <div className="icon">
            <span className="icon-text">魔</span>
          </div>
        </div>
        <div className="card-content mx-2">
          <div className="card-type">
            <span>[{type} CARD]</span>
          </div>
          <div className="card-image">
            <img src={frontImage} alt={name} />
          </div>
        </div>
        <div className="card-description"
          style={{ backgroundColor: `${descriptBgColor}` }}>
          <p>{description}</p>
          <span></span>
        </div>
      </div>

      <div className="back-side absolute top-0">
        <img src={backImage} alt="Card Back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

    </div>
  );
};

export default CardComponent;
