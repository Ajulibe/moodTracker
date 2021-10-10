import React from "react";
import { Card } from "./style";
import { MoodRingsCmp } from "components/moodrings";
import bg from "assets/catbg.svg";

interface Props {
  mood: string;
}

export const HistoryCard: React.FC<Props> = ({ mood }) => {
  const historyData = {
    moodBorderColor:
      mood === "indifferent"
        ? "rgba(255, 150, 53, 1)"
        : mood === "excited"
        ? "rgba(50, 194, 82, 1)"
        : mood === "angry"
        ? "rgba(249, 49, 49, 1)"
        : "rgba(175, 170, 168, 0.2)",
    moodBgColor:
      mood === "indifferent"
        ? "rgba(255, 150, 53, 0.2)"
        : mood === "excited"
        ? "rgba(50, 194, 82, 0.2)"
        : mood === "angry"
        ? "rgba(249, 49, 49, 0.2)"
        : "rgba(175, 170, 168, 0.2)",
    moodMessage: "Cat was super excited!",
    moodDate: "06-09-2021 / 07:01",
  };

  return (
    <Card
      style={{
        border: `1px solid ${historyData.moodBorderColor}`,
      }}
      bgColor={historyData.moodBgColor}
    >
      <MoodRingsCmp
        emojis="😃"
        borderColor={historyData.moodBorderColor}
        bgColor={historyData.moodBgColor}
      />
      <div className="message">
        <span
          className="message-info"
          style={{
            color: historyData.moodBorderColor,
          }}
        >
          Cat was super excited!
        </span>
        <span className="message-date">06-09-2021 / 07:01</span>
      </div>
      <div
        className="background"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
    </Card>
  );
};
