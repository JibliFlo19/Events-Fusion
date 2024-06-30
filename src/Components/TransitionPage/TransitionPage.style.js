import styled from "styled-components";
import {
  DARK_GRAY,
  SKY_BLUE,
  INTENSE_BLUE,
  GRAY,
  WHITE_GRAY,
} from "../../Constants/color";

export const TransitionDiv = styled.div`
  background-color: ${SKY_BLUE};
  height: 600px;
`;

export const TransitionParagraph = styled.p`
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  color: ${DARK_GRAY};
  font-weight: bold;
  text-align: center;
  padding-top: 80px;
  font-size: 30px;
`;

export const AnotherParagraph = styled.p`
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${INTENSE_BLUE};
  font-size: 30px;

  &:hover {
    color: ${WHITE_GRAY};
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;

export const ParagraphText = styled.p`
  padding-left: 50px;
  font-size: 15px;
  font-weight: bold;
  color: ${GRAY};
`;
