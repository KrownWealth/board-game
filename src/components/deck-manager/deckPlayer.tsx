import Card from "../game/card";
import FieldCard from "../game/fieldCard";

const cardData = Array(39).fill({ color: "#ff7b00", image: "/charizard.webp" });
const gridCardData = [
  { color: "#ff7b00", image: "/charizard.webp" },
  { color: "#6890f0", image: "/eevee.webp" },
];

const DeckPlayer = () => {
  return (
    <div
      className="flex flex-col items-center gap-8 p-8"
      style={{
        transform:
          "perspective(1000px) rotateX(60deg) rotateZ(-2deg) translate(0px, -40px)",
        transition: "transform 0.5s",
      }}
    >
      <div className="relative">
        <div className="grid gap-4 grid-rows-2">
          {gridCardData.map((card, index) => (
            <div
              key={index}
              className="flex justify-center items-center border-2 rounded-lg
                border-gray-300 shadow-lg w-[100px] h-[120px]"
            >
              <Card
                color={card.color}
                image={card.image}
                width={80}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>


      <div className="grid grid-rows-2 gap-28">
        <div
          className="relative"
          style={{
            width: "120px",
            height: "180px",
            transform:
              "perspective(1000px) rotateX(180deg) translate(0px, -100px)",
            transition: "transform 0.5s",
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${index * 1.5}px`,
                left: `${index * 0.2}px`,
                zIndex: index,
                width: "120px",
                height: "180px",
                transformOrigin: "center center",
              }}
            >
              <Card color={card.color} image={card.image} width={100} height={120} />
            </div>
          ))}
        </div>
        <FieldCard />
      </div>
    </div>
  );
};

export default DeckPlayer;
