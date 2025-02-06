export enum CardType {
  Monster = "Monster",
  Spell = "Spell",
  Trap = "Trap",
}

export enum CardRotation {
  Up = "Up", // Default vertical orientation
  Right = "Right", // Rotated 90° to the right
  Left = "Left", // Rotated 90° to the left
  Down = "Down", // Rotated 180°
}

export enum CardOrientation {
  FaceUp = "FaceUp",
  FaceDown = "FaceDown",
}

export type Card = {
  id: string;
  name: string;
  templateImage: string;
  frontImage: string;
  backImage: string;
  type?: CardType;
  description?: string;
  rotation?: CardRotation;
  orientation?: CardOrientation;
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
