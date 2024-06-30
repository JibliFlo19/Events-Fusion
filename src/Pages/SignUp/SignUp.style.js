import styled from "styled-components";


export const App = styled.div`
background-image: url("https://media.discordapp.net/attachments/1242891295110729881/1255972322083475539/WhiteClouds.png?ex=667f12e0&is=667dc160&hm=9d4370ab89988b257dcd9bccc92e2c91562a491f13cfec9083bfc481c5fbdecf&=&format=webp&quality=lossless&width=1177&height=662");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const SignUpContainer = styled.div`
 background-color: #D0DCF4;
display: flex;
justify-content: center;
flex-direction: column;
width: 500px;
margin: auto;
padding: 100px;
border: 1px solid #ccc;
border-radius: 10px;
margin-top: 100px;
margin-bottom: 100px;
`;

export const SignUpContainerTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  text-align: center;
`;

export const SignUpnContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const SignUpContainerLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
`;

export const SignUpContainerInput = styled.input`
width: 100%;
    padding: 8px;
    box-sizing: border-box;
 
`;

export const SignUpContainerButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;
