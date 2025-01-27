import React from "react";
import CardComponent from "./components/card";
import PlayingField from "./components/game/playingField";
import { CardType, MonsterCard, SpellCard, TrapCard } from "../types/card";




const jinzoMonsterCard: MonsterCard = {
  id: "1",
  name: "Jinzo",
  frontImage: "/effect-monster-template.jpeg",
  backImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Monster,
  level: 7,
  attackPoints: 2500,
  defensePoints: 2100,
  description: "The ultimate wizard in terms of attack and defense.",
  cardBgColor: "#BF7245",
  descriptBgColor: "#F2D8C2"
};

const darkHoleSpell: SpellCard = {
  id: "dark-hole",
  name: "Dark Hole",
  frontImage: "/spell-card-template.png",
  backImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Spell,
  spellType: "Normal",
  description: "Destroy all monsters on the field.",
  cardBgColor: "#038C73",
  descriptBgColor: "#CCD9D7"
};

const trapCard: TrapCard = {
  id: "trap-hole",
  name: "Mirror Force",
  frontImage: "/trap-card-template.jpeg",
  backImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Trap,
  trapType: "Normal",
  description: "Activate when your opponent summons a monster with 1000+ attack points.",
  cardBgColor: "#8B008B",
  descriptBgColor: "#F2D5E5"
};

const HandField: React.FC = () => {
  const opponentHand = [jinzoMonsterCard, darkHoleSpell, trapCard, jinzoMonsterCard, darkHoleSpell];
  const playerHand = [darkHoleSpell, trapCard, jinzoMonsterCard, darkHoleSpell, trapCard];

  const renderCards = (
    cards: Array<MonsterCard | SpellCard | TrapCard>,
    isPlayerHand: boolean
  ) => (
    <div className={`flex ${isPlayerHand ? "gap-2 -top-8" : ""}`}>
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} />
      ))}
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-200 to-blue-100 flex flex-col justify-between items-center">

      <div className="flex-grow-0 card-container ">
        {renderCards(opponentHand, false)}
      </div>


      <div className="flex-grow flex items-center justify-center w-full">
        <PlayingField />
      </div>


      <div className="flex-grow-0 player-container">
        {renderCards(playerHand, true)}
      </div>
    </div>
  );
};

export default HandField;
