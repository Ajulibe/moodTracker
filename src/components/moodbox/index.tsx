import React from "react";
import { Container, SaveButton } from "./style";
import { ReactComponent as Cat } from "assets/cat.svg";
import { MoodRingsCmp } from "components/moodrings";
import { moodData, mood } from "components/data/moods";

interface IProps {
  addMood: (addMood: string) => void;
  save: () => void;
  selectedMood: [];
}

const MoodBox: React.FC<IProps> = ({ addMood, save, selectedMood }) => {
  return (
    <Container>
      <div className="container">
        <div className="container-header">
          <Cat />
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
                  addMood(item.moodName);
                }}
                borderColor={item.mooodBorderColor}
                bgColor={item.moodBgColor}
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
