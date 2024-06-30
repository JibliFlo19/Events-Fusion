import styled from "styled-components";

export const DivEvent = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 50px 25px; */
  padding: 20px;
  padding-top: 100px;
  background: #a6b1c4;
  color: black;
  height: auto;
  gap: 16px;
  flex-wrap: wrap;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImgEvent = styled.img`
  width: 400px;
  max-width: 400px;
  /* height: auto; */
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImgDiv = styled.div`
  width: 400px;
  height: 600px;
  margin-top: 50px;
`;

export const DivDetails = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  flex-direction: column;
  background-color: #668aae;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const DetailsName = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "Lucida Handwriting", "Brush Script MT", cursive;
`;

export const DetailsOther = styled.p`
  font-size: 20px;
  padding: 10px;
  width: 800px;
  color: white;
`;

export const DivDetailsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #ffaebc; */
  background-color: #db3a3a;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;
