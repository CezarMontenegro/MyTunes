import styled from 'styled-components';

export const Container = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: absolute;
    font-weight: bolder;
    font-size: 60px;
    top: 20%;
  }
`;

export const LoginBox = styled.main`
  height: 20vh;
  width: 50vw;
  background-color: white;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: -1px 1px 3px 3px silver;

  input {
    width: 70%;
  }

  button {
    width: 72%;
    background-color: blue;
    font-weight: bolder;
    color: white;
    box-shadow: -1px 1px 1px 2px silver;
  }
`;

export const LoadingBox = styled.main`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
`;
