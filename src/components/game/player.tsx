import Card from '../card';


const cardData = [
  { color: '#ff7b00', image: '/charizard.webp' },
  { color: '#6890f0', image: '/eevee.webp' },
  { color: '#6890f0', image: '/mewtwo.webp' },
];

const PlayerComponent = () => {
  return (
    <section className="card-container">
      {/* {cardData.map((pokemon, index) => (
        <Card
          key={index}
          color={pokemon.color}
          image={pokemon.image}
          width="100"
          height="120"
        />
      ))} */}
      Hello
    </section>
  );
};

export default PlayerComponent;
