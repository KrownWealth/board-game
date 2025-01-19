import React, { useRef, useState } from "react";
import "../../App.css"



interface CardProps {
  color: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ color, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

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

      const xRot = coefX * 20 - 10; // Rotate X-axis
      const yRot = -(coefY * 20 - 10); // Rotate Y-axis

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
      // Temporarily remove mouse movement effect on flip
      cardRef.current.style.transition = "transform 0.6s ease";
      cardRef.current.style.transform = isFlipped
        ? "rotateX(0deg) rotateY(0deg)"
        : "rotateY(180deg)";
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <div className="front face">
        <img src={image} alt="Front" />
        <div className="cardFront"></div>
        <div className="sparkle"></div>
        <div className="shimmer"></div>
      </div>
      <div className="back face">
        <img src={image} alt="Back" />
        <div className="cardFront"></div>
        <div className="sparkle"></div>
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default Card;
