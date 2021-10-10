import React from "react";
import { MoodRings } from "./style";
import { COLORS } from "theme/colors";

interface MoodsEmojis {
  emojis: string;
  borderColor: string | null;
  bgColor: string | null;
  onClick?: () => void;
  name?: string;
  boverBgColor?: string | null;
}
export const MoodRingsCmp: React.FC<MoodsEmojis> = ({
  emojis,
  borderColor,
  bgColor,
  onClick,
  boverBgColor,
}) => {
  console.log(boverBgColor, "borderColor");
  return (
    <MoodRings
      onClick={onClick}
      bkgdColor={boverBgColor}
      style={{
        border: borderColor
          ? `1px solid ${borderColor}`
          : `1px solid ${COLORS.emptyMoodBorder}`,
        backgroundColor: bgColor ?? "",
      }}
    >
      {emojis}
    </MoodRings>
  );
};
