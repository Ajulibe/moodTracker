import styled, { keyframes } from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";
import { COLORS } from "theme/colors";

interface Props {
  bgColor?: string;
}

//fade in
const fadeIn = keyframes`
  0% {
    opacity: 0.5
  }

  100% {
    opacity: 1
  }
`;

export const Card = styled.div<Props>`
  width: 47.9rem;
  ${flexmiddle};
  justify-content: flex-start;
  background: ${COLORS.cardBg};
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  max-height: 85px;
  border: 1px solid ${COLORS.excitedBorder};
  margin-top: 12px;
  transition: all 0.2s ease-in-out;
  /* animation: ${fadeIn} 0.5s ease-in; */

  @media only screen and (max-width: 593px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    border-width: 1.5px;
    ${(props) =>
      props.bgColor
        ? `filter: drop-shadow(0px 0px 2px ${props.bgColor})`
        : null}
  }

  .message {
    display: flex;
    flex-direction: column;

    &-info {
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: ${COLORS.excitedBorder};

      @media only screen and (max-width: 593px) {
        font-size: 14px;
        line-height: 21px;
      }
    }

    &-date {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: ${COLORS.moodBoxBorder};

      @media only screen and (max-width: 593px) {
        font-size: 10px;
      }
    }
  }

  .background {
    width: 200px;
    height: 243.28px;
    filter: opacity(40%);
    margin-left: auto;

    @media only screen and (max-width: 593px) {
      width: 100px;
    }
  }
`;
