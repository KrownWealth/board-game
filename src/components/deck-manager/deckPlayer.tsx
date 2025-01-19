import Card from "../game/card"



const cardData = [
  { color: '#ff7b00', image: '/charizard.webp' },
  { color: '#6890f0', image: '/eevee.webp' },
  { color: '#6890f0', image: '/mewtwo.webp' },
]


const DeckPlayer = () => {
  return (
    <div className="relative p-8">
      <div className='grid grid-rows-3 gap-4'>
        {cardData.map((pokemon, index) => (
          <Card key={index} color={pokemon.color} image={pokemon.image} />
        ))}
      </div>
    </div>

  )
}

export default DeckPlayer
