import styled from "styled-components";
import { SKY_BLUE, INTENSE_BLUE } from "./../../Constants/color";

export const EventWrapper = styled.div`
  background-color: ${SKY_BLUE};
`;

export const EventWrapContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 48px 25px;
  padding: 8px 12px;
  background: transparent;
  color: black;
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
`;

export const DivFiltrare = styled.div``;

export const TextFiltrare = styled.p`
  padding-top: 80px;
  padding-left: 50px;
  font-size: 20px;
  font-weight: bold;
  color: ${INTENSE_BLUE};
`;

export const DivCalendar = styled.div`
  display: flex;
  justify-content: right;
`;
