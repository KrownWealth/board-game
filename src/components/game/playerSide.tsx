import "../../App.css"
import FieldCard from "./fieldCard"

const PlayerPlayingSide = () => {
  return (
    <div className="player-side">

      {Array(5).fill(null).map((_, index) => (
        <FieldCard key={index} />
      ))}
      {Array(5).fill(null).map((_, index) => (
        <FieldCard key={index + 6} />
      ))}
    </div>
  )
}

export default PlayerPlayingSide
