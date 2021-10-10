import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";

export const Container = styled.div`
  .container {
    width: 56.4rem;
    ${flexmiddle};
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 15px;
    padding-top: 40px;
    border: 1px solid red;
    height: 80vh;

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
        color: #35100c;
      }

      &__text {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(53, 16, 12, 0.5);
        margin-top: 15px;
      }
    }

    &-history {
      overflow: scroll;
      flex: 1;
      padding: 20px;
    }

    .history {
      width: 34.5rem;
      border: 1px solid #efeeee;
      box-sizing: border-box;
      border-radius: 5px;
      margin-top: 5.4rem;
      ${flexmiddle};
      flex-direction: column;

      &-cat {
        margin-top: 7.7rem;
      }

      &-message {
        width: 12.2rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: #afaaa8;
        margin-top: 13px;
        margin-bottom: 7.7rem;
      }
    }
  }
`;
