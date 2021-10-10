import styled, { keyframes } from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";

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
  border: 1px solid red;
  background: rgba(243, 244, 246, 0.7);
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  max-height: 85px;
  border: 1px solid #1d9a39;
  margin-top: 12px;
  transition: all 0.2s ease-in-out;
  /* animation: ${fadeIn} 0.5s ease-in; */

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
      color: #1d9a39;
    }

    &-date {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: #c4c4c4;
    }
  }

  .background {
    width: 200px;
    height: 243.28px;
    filter: opacity(40%);
    margin-left: auto;
  }
`;
