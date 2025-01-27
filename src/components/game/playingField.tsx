import '../../App.css';
import OpponentPlayingSide from './opponentSide';
import PlayerPlayingSide from './playerSide';


const PlayingField = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-4">
      <div
        className="field-mat w-full"
        style={{
          transform:
            'perspective(1000px) rotateX(80deg) scale(0.9) translate(15px, 60px)',
          transition: 'transform 0.5s',
        }}
      >
        <OpponentPlayingSide />
        <div className="h-14"></div>
        <PlayerPlayingSide />
      </div>
    </section>
  );
};

export default PlayingField;
