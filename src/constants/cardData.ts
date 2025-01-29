import { CardType, MonsterCard, SpellCard, TrapCard } from "../../types/card";

export const jinzoMonsterCard: MonsterCard = {
  id: "1",
  name: "Jinzo",
  templateImage: "/effect-monster-template.jpeg",
  frontImage: "/jinzo-effect-monster-card.png",
  backImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Monster,
  level: 7,
  attackPoints: 2500,
  defensePoints: 2100,
  description: "The ultimate wizard in terms of attack and defense.",
  descriptBgColor: "#F2D8C2",
};

export const darkHoleSpell: SpellCard = {
  id: "2",
  name: "Dark Hole",
  templateImage: "/spell-card-template.png",
  frontImage: "/dark-hole-spell-card.png",
  backImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Spell,
  spellType: "Normal",
  description: "Destroy all monsters on the field.",
  descriptBgColor: "#CCD9D7",
};

export const trapCard: TrapCard = {
  id: "3",
  name: "Mirror Force",
  templateImage: "/trap-card-template.jpeg",
  frontImage: "/mirror-force-trap-card.png",
  backImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardBack-QL475HcOmVnDdNodqQ8TWIRvrHtkA9.png",
  type: CardType.Trap,
  trapType: "Normal",
  description:
    "Activate when your opponent summons a monster with 1000+ attack points.",
  descriptBgColor: "#F2D5E5",
};
