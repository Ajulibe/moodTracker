import { COLORS } from "theme/colors";

/**
 * to add more moods, update the moodData with the needed information
 * as required by the interface
 */

export interface mood {
  emoji: string;
  message: string;
  moodName: string;
  moodBgColor: string;
  mooodBorderColor: string;
}
export const moodData: mood[] = [
  {
    emoji: "ð",
    message: "Cat wasnât having it",
    moodName: "angry",
    moodBgColor: COLORS.angryBg,
    mooodBorderColor: COLORS.angryBorder,
  },
  {
    emoji: "ð",
    message: "Cat was indifferent",
    moodName: "indifferent",
    moodBgColor: COLORS.indifferentBg,
    mooodBorderColor: COLORS.indifferentBorder,
  },
  {
    emoji: "ð",
    message: "Cat was super excited!",
    moodName: "excited",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
];
