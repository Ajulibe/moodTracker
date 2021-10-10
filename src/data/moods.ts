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
    emoji: "😖",
    message: "Cat wasn’t having it",
    moodName: "angry",
    moodBgColor: COLORS.angryBg,
    mooodBorderColor: COLORS.angryBorder,
  },
  {
    emoji: "😐",
    message: "Cat was indifferent",
    moodName: "indifferent",
    moodBgColor: COLORS.indifferentBg,
    mooodBorderColor: COLORS.indifferentBorder,
  },
  {
    emoji: "😃",
    message: "Cat was super excited!",
    moodName: "excited",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
  {
    emoji: "🥰",
    message: "Cat was in love",
    moodName: "inLove",
    moodBgColor: COLORS.indifferentBg,
    mooodBorderColor: COLORS.indifferentBorder,
  },
  {
    emoji: "👹",
    message: "Cat was a devil",
    moodName: "devilCat",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
  {
    emoji: "😃",
    message: "Cat was super excited!",
    moodName: "excited",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
  {
    emoji: "🥰",
    message: "Cat was in love",
    moodName: "inLove",
    moodBgColor: COLORS.indifferentBg,
    mooodBorderColor: COLORS.indifferentBorder,
  },
  {
    emoji: "👹",
    message: "Cat was a devil",
    moodName: "devilCat",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
  {
    emoji: "🥰",
    message: "Cat was in love",
    moodName: "inLove",
    moodBgColor: COLORS.indifferentBg,
    mooodBorderColor: COLORS.indifferentBorder,
  },
  {
    emoji: "👹",
    message: "Cat was a devil",
    moodName: "devilCat",
    moodBgColor: COLORS.excitedBg,
    mooodBorderColor: COLORS.excitedBorder,
  },
];
