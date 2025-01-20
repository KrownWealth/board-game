import "../../App.css"
import OpponentPlayingSide from "./opponentSide"
import PlayerPlayingSide from "./playerSide"

const PlayingField = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="field-mat w-full"
        style={{
          transform: "perspective(1000px) rotateX(59deg) scale(1) translate(0px, -20px)",
          transition: "transform 0.5s",
        }}>
        <OpponentPlayingSide />
        <div className="h-14"></div>
        <PlayerPlayingSide />
      </div>
    </section>
  )
}

export default PlayingField
