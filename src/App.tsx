import Card from './components/game/card';
import PlayingField from './components/game/playingField';

const cardData = [
  { color: '#ff7b00', image: '/charizard.webp' },
  { color: '#6890f0', image: '/eevee.webp' },
  { color: '#6890f0', image: '/mewtwo.webp' },
  { color: '#6890f0', image: '/pokemon.jpg' },
  { color: '#6890f0', image: '/eevee.webp' },
  { color: '#6890f0', image: '/charizard.webp' }
];

function HandField() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      {/* Opponent's Hand */}
      <div className="flex-grow-0 card-container ">
        {cardData.map((pokemon, index) => (
          <Card key={index} color={pokemon.color} image={pokemon.image} />
        ))}
      </div>

      <div className="flex-grow flex items-center justify-center w-full">
        <PlayingField />
      </div>

      {/* Player's Hand */}
      <div className="flex-grow-0 player-container gap-5">
        {cardData.map((pokemon, index) => (
          <Card key={index} color={pokemon.color} image={pokemon.image} />
        ))}
      </div>
    </div>
  );
}

export default HandField;
