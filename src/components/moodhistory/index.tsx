import React from "react";
import { ReactComponent as Cat } from "assets/smallcat.svg";
import { ReactComponent as FadedCat } from "assets/fadedcat.svg";
import { Container } from "./style";
import { HistoryCard } from "components/historycard";

interface IProps {
  moodHistory: [];
}

const index: React.FC<IProps> = ({ moodHistory }) => {
  return (
    <Container>
      <div className="container">
        <div className="container-header">
          <div>
            <Cat />
          </div>

          <div className="container-header__left">
            <div>
              <span className="container-header__title">Cat mood tracker™</span>
            </div>

            <div className="container-header__text">
              <span>mood history</span>
            </div>
          </div>
        </div>
        {moodHistory.length !== 0 ? (
          <div className="container-history">
            {moodHistory.map((item: string, i) => {
              return <HistoryCard mood={item} key={`${i}${item}`} />;
            })}
          </div>
        ) : (
          <div className="history">
            <FadedCat className="history-cat" />
            <span className="history-message">No mood history to show yet</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default index;
