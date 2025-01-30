
import Deck from "./deck";

const DeckPlayer = () => {

  return (
    <div
      className="relative bg-gray-400 w-[15%]"
      style={{
        transform:
          "perspective(1000px) rotateX(69deg) rotateZ(-3deg) scale(0.9)  translate(15px, 100px)",
        transition: "transform 0.5s",
      }}
    >
      <Deck />
    </div>
  );
};

export default DeckPlayer;
