import React from "react";
import { Container, SaveButton } from "./style";
import Cat from "assets/cat.svg";
import { MoodRingsCmp } from "components/moodrings";
import { moodData, mood } from "data/moods";
import { IData } from "App";
import moment from "moment";

interface IProps {
  addMood: (addMood: IData) => void;
  save: () => void;
  selectedMood: IData[];
}

const MoodBox: React.FC<IProps> = ({ addMood, save, selectedMood }) => {
  return (
    <Container>
      <div className="container">
        <div className="container-header">
          <img src={Cat} className="container-header__image" alt="cat" />
        </div>

        <div className="container-question">
          <span>What is your cat’s current mood?</span>
        </div>

        <div className="container-emoji">
          {moodData.map((item: mood, i) => {
            return (
              <MoodRingsCmp
                emojis={item.emoji}
                key={`${i}${item.emoji}`}
                onClick={() => {
                  addMood({
                    moodName: item.moodName,
                    moodBgColor: item.moodBgColor,
                    moodBorderColor: item.mooodBorderColor,
                    message: item.message,
                    emoji: item.emoji,
                    date: moment(new Date()).format("DD-MM-YYYY"),
                    time: moment(new Date()).format("LT"),
                  });
                }}
                name={item.moodName}
                boverBgColor={item.moodBgColor}
                borderColor={
                  selectedMood.some(
                    (data) => data["moodName"] === item.moodName
                  )
                    ? item.mooodBorderColor
                    : null
                }
                bgColor={
                  selectedMood.some(
                    (data) => data["moodName"] === item.moodName
                  )
                    ? item.moodBgColor
                    : null
                }
              />
            );
          })}
        </div>

        <SaveButton onClick={save} disabled={selectedMood.length === 0}>
          Save mood
        </SaveButton>
      </div>
    </Container>
  );
};

export default MoodBox;
