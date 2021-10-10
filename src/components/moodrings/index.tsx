import React from "react";
import { MoodRings } from "./style";

interface MoodsEmojis {
  emojis: string;
  borderColor: string | null;
  bgColor: string | null;
  onClick?: () => void;
  name?: string;
}
export const MoodRingsCmp: React.FC<MoodsEmojis> = ({
  emojis,
  borderColor,
  bgColor,
  onClick,
  name,
}) => {
  return (
    <MoodRings
      onClick={onClick}
      style={{
        border: borderColor
          ? `1px solid ${borderColor}`
          : "1px solid rgba(175, 170, 168, 0.1)",
        backgroundColor: bgColor ?? "",
      }}
    >
      {emojis}
    </MoodRings>
  );
};
