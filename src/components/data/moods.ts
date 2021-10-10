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
    moodBgColor: "rgba(249, 49, 49, 0.1)",
    mooodBorderColor: "rgba(249, 49, 49, 1)",
  },
  {
    emoji: "😐",
    message: "Cat was indifferent",
    moodName: "indifferent",
    moodBgColor: "rgba(255, 150, 53, 0.2)",
    mooodBorderColor: "rgba(255, 150, 53, 1)",
  },
  {
    emoji: "😃",
    message: "Cat was super excited!",
    moodName: "excited",
    moodBgColor: "rgba(50, 194, 82, 0.2)",
    mooodBorderColor: "rgba(29, 154, 57, 1)",
  },
];
