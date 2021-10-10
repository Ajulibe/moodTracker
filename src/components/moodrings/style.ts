import styled from "styled-components";
import { flexmiddle } from "sass/abstracts/mixins";
import { COLORS } from "theme/colors";

interface Props {
  bkgdColor?: string | null;
}

type hoverPick = Props;

export const MoodRings = styled.div<hoverPick>`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  ${flexmiddle};
  margin: 0 10px 0 10px;
  background: ${COLORS.emptyMood};
  transition: all 0.2s ease-in-out;
  font-size: 30px;
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${(props) => props.bkgdColor};
  }

  @media only screen and (max-width: 593px) {
    height: 35px;
    width: 35px;
    font-size: 16px;
  }

  @media only screen and (max-width: 340px) {
    height: 20px;
    width: 20px;
    font-size: 8px;
  }
`;
