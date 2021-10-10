import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";
import { COLORS } from "theme/colors";

export const MoodRings = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  ${flexmiddle};
  margin: 0 10px 0 10px;
  background: ${COLORS.emptyMood};
  transition: all 0.2s ease-in-out;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 593px) {
    height: 35px;
    width: 35px;
    font-size: 15px;
  }
`;
