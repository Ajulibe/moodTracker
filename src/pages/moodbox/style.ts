import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";
import { COLORS } from "theme/colors";

export const Container = styled.div`
  .container {
    width: 46.4rem;
    ${flexmiddle};
    flex-direction: column;
    padding: 10.3rem 0 10.2rem 0;
    border: 1px solid ${COLORS.moodBoxBorder};
    box-sizing: border-box;
    border-radius: 15px;
    margin-right: 170px;

    &-header {
      width: 94px;
      height: 79px;
    }

    &-question {
      margin-top: 2.2rem;
      font-weight: bold;
      font-size: 24px;
      line-height: 26px;
      text-align: center;
      color: ${COLORS.primaryText};
      width: 28.4rem;
      margin-bottom: 5.7rem;

      @media only screen and (max-width: 593px) {
        font-size: 18px;
      }
    }

    &-emoji {
      display: flex;
      font-size: 30px;
      width: 30rem;
      flex-wrap: wrap;
      justify-content: center;

      & > * {
        margin-bottom: 10px;
      }

      &__rings {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        ${flexmiddle};
        margin: 0 10px 0 10px;
        background: ${COLORS.emptyMood};
        transition: all 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }

    //media-queries
    @media only screen and (max-width: 1276px) {
      margin-right: 10px;
    }

    @media only screen and (max-width: 1095px) {
      margin-right: 0px;
      width: unset;
      margin-bottom: 20px;
    }
  }
`;

interface ButtonProps {
  disabled: Boolean;
}

export const SaveButton = styled.button<ButtonProps>`
  width: 134px;
  height: 41px;
  border-radius: 5px;
  outline: 0;
  margin-top: 6.6rem;
  border-width: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: ${COLORS.white};

  ${(props) =>
    props.disabled
      ? `background: ${COLORS.disbaledButtonBg}`
      : `background: ${COLORS.activeButtonBg}`}
`;
