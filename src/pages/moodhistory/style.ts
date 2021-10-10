import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";
import { COLORS } from "theme/colors";

export const Container = styled.div`
  .container {
    width: 56.4rem;
    ${flexmiddle};
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 15px;
    padding-top: 40px;
    height: 54rem;

    @media only screen and (max-width: 1095px) {
      height: unset;
      flex: 1;
    }

    @media only screen and (max-width: 593px) {
      width: 40.4rem;
    }

    @media only screen and (max-width: 439px) {
      width: 30.4rem;
    }

    @media only screen and (max-width: 340px) {
      width: 100%;
    }

    &-header {
      display: flex;
      margin-bottom: 24px;

      &__left {
        flex-direction: column;
        display: flex;
        margin-left: 10px;
      }

      &__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        color: ${COLORS.black};

        @media only screen and (max-width: 340px) {
          font-size: 18px;
        }
      }

      &__text {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${COLORS.fadedBlack};
        margin-top: 15px;

        @media only screen and (max-width: 340px) {
          margin-top: 8px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    &-history {
      overflow: scroll;
      flex: 1;
      padding: 20px;

      @media only screen and (max-width: 593px) {
        padding: unset;
      }
    }

    .history {
      width: 34.5rem;
      border: 1px solid ${COLORS.disbaledButtonBg};
      box-sizing: border-box;
      border-radius: 5px;
      margin-top: 5.4rem;
      ${flexmiddle};
      flex-direction: column;

      @media only screen and (max-width: 1095px) {
        margin-top: unset;
      }

      @media only screen and (max-width: 442px) {
        width: 24.5rem;
      }

      &-cat {
        margin-top: 7.7rem;
      }

      &-message {
        width: 12.2rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: ${COLORS.emptyMoodText};
        margin-top: 13px;
        margin-bottom: 7.7rem;
      }
    }
  }
`;
