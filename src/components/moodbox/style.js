import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";

export const Container = styled.div`
  .container {
    width: 46.4rem;
    ${flexmiddle};
    flex-direction: column;
    padding: 10.3rem 0 10.2rem 0;
    border: 1px solid #c4c4c4;
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
      color: #898583;
      width: 28.4rem;
      margin-bottom: 5.7rem;
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
        background: rgba(175, 170, 168, 0.2);
        transition: all 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const SaveButton = styled.button`
  width: 134px;
  height: 41px;
  border-radius: 5px;
  outline: 0;
  margin-top: 6.6rem;
  border-width: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  ${(props) => (props.disabled ? "background: #efeeee" : "background: #120C35")}
`;
