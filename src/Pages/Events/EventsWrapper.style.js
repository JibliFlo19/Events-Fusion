import { Link } from "react-router-dom";

import styled from "styled-components";
import { WHITE_NEUTRAL, SKY_BLUE, GRAY_BLUE } from "../../Constants/color";

export const Card = styled(Link)`
  background: ${SKY_BLUE};
  color: black;
  text-decoration: none;
  width: 300px;
  height: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  max-height: 600px;
  border-radius: 10px 10px 0 0;

  &:hover {
    background-color: ${GRAY_BLUE};
  }
`;

export const CardImgContainer = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
`;

export const CardImg = styled.img`
  padding: 0;
  width: 250px;
  max-height: 350px;
  height: 500px;
  border-radius: 4px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.1);
  padding: 8px;
  margin-top: 16px;
  height: 250px;
`;

export const Title = styled.h1`
  margin: 10px 0;
  color: ${WHITE_NEUTRAL};
  font-size: 20px;
`;

export const Text = styled.p`
  margin: 0 0 4px;
`;

export const UperText = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  color: ${WHITE_NEUTRAL};
`;
