export enum CardType {
  Monster = "Monster",
  Spell = "Spell",
  Trap = "Trap",
}

export enum CardRotation {
  Up = "Up",
  Right = "Right",
  Left = "Left",
  Down = "Down",
}

export enum CardOrientation {
  FaceUp = "FaceUp",
  FaceDown = "FaceDown",
}

export type Card = {
  id: string;
  name: string;
  frontImage: string;
  backImage: string;
  type?: CardType;
  description?: string;
  rotation?: CardRotation;
  orientation?: CardOrientation;
  cardBgColor?: string;
  descriptBgColor?: string;
};

export interface MonsterCard extends Card {
  level: number;
  attackPoints: number;
  defensePoints: number;
}

export interface SpellCard extends Card {
  spellType: "Normal" | "Continuous" | "Quickplay" | "Equip" | "Field";
}

export interface TrapCard extends Card {
  trapType: "Normal" | "Continuous" | "Counter";
}
