import React from "react";
import { MoodRings } from "./style";

interface MoodsEmojis {
  emojis: string;
  borderColor?: string;
  bgColor?: string;
  onClick?: () => void;
}
export const MoodRingsCmp: React.FC<MoodsEmojis> = ({
  emojis,
  borderColor,
  bgColor,
  onClick,
}) => {
  return (
    <MoodRings
      onClick={onClick}
      style={{ border: `1px solid ${borderColor}`, backgroundColor: bgColor }}
    >
      {emojis}
    </MoodRings>
  );
};
