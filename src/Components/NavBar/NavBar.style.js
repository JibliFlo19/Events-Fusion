import { Link } from "react-router-dom";
import styled from "styled-components";
import { WHITE_NEUTRAL, GRAY, WHITE_GRAY } from "../../Constants/color";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 10px;
  position: fixed;
  /* border-radius: 10px; */
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  font-weight: bold;
  justify-content: right;
`;

//  &:hover {
//   background-color: WHITE_GRAY;
//  }
// export const InputNavBar = styled.input`
//   width: 50%;
//   height: 30px;
//   border-radius: 10px;
//   border-color: ${WHITE_GRAY};
//   border-top-color: ${WHITE_GRAY};
//   border-left-color: ${WHITE_GRAY};

//   background-color: #fff;
//   padding-top: 10px;
// `;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  justify-content: center;
  /* text-align: center; */
  color: ${GRAY};
  padding: 0px 5px;
  border-radius: 4px;

  &:hover {
    color: ${WHITE_GRAY};
  }

  @media screen and (max-width: 820px) {
    color: ${WHITE_NEUTRAL};
  }
`;

export const LinkNavDropdownStyle = styled(Link)`
  text-decoration: none;
  margin-left: auto;

  color: ${GRAY};
  padding: 0px 5px;
  border-radius: 4px;

  &:hover {
    color: ${WHITE_GRAY};
  }

  @media screen and (max-width: 820px) {
    color: ${WHITE_NEUTRAL};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  position: absolute;
  top: 60px;
  display: block;
  text-align: right;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: space-between;
  color: black;
  width: 100%;
  height: 60px;
  z-index: 1;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 60px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  margin-left: auto;

  display: none;
  background: none;
  border: none;
  color: ${GRAY};

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const OtherNavLinks = styled.a`
  color: ${GRAY};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${WHITE_GRAY};
  }
`;
