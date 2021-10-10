import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";

export const MoodRings = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  ${flexmiddle};
  margin: 0 10px 0 10px;
  background: rgba(175, 170, 168, 0.2);
  transition: all 0.2s ease-in-out;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
