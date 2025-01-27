import '../../App.css';
import FieldCard from './fieldCard';



const OpponentPlayingSide = () => {
  return (
    <div className="opponent-side">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <FieldCard key={`opponent-6-${index}`} />
        ))}
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <FieldCard key={`opponent-6-${index}`} />
        ))}
    </div>
  );
};

export default OpponentPlayingSide;
