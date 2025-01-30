
import Deck from "./deck";

const DeckOpponent = () => {


  return (

    <div
      className="relative w-[15%]"
      style={{
        transform:
          "perspective(1000px) rotateX(69deg) translate(0px, -20px)",
        transition: "transform 0.5s",
      }}
    >
      {/* <Deck /> */}
    </div>
  );
};

export default DeckOpponent;
