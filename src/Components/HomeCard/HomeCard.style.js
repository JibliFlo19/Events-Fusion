import styled from "styled-components";
import { GRAY, WHITE_NEUTRAL } from "../../Constants/color";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  width: 100%;
  height: auto;
  position: relative;
  // margin-top: 150px;
`;

export const Card = styled.div`
  background: ${GRAY};
  width: 800px;
  height: 500px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
`;

export const CardTitle = styled.h1`
  color: ${WHITE_NEUTRAL};
  font-size: 40px;
  text-align: center;
`;

export const CardImg = styled.img`
  width: 700px;
  height: 500px;

  @media screen and (max-width: 820px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 620px) {
    width: 400px;
    height: 300px;
  }
`;
