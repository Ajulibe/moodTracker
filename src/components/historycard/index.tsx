import React from "react";
import { Card } from "./style";
import { MoodRingsCmp } from "components/moodrings";
import bg from "assets/catbg.svg";
import { IData } from "App";

interface Props {
  mood: IData;
}

export const HistoryCard: React.FC<Props> = ({ mood }) => {
  return (
    <Card
      style={{
        border: `1px solid ${mood.moodBorderColor}`,
      }}
      bgColor={mood.moodBgColor}
    >
      <MoodRingsCmp
        emojis={mood.emoji}
        borderColor={mood.moodBorderColor}
        bgColor={mood.moodBgColor}
      />

      <div className="message">
        <span
          className="message-info"
          style={{
            color: mood.moodBorderColor,
          }}
        >
          {mood.message}
        </span>
        <span className="message-date">
          {mood.date} &nbsp;/ &nbsp;
          {mood.time}
        </span>
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
