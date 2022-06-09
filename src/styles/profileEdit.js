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
    top: 5%;
    display: inline;
  }

  p {
    display: inline;
    color: rgb(38, 77, 38);
  }
`;

export const Main = styled.main`
  height: 60vh;
  width: 50vw;
  padding-top: 20px;
  background-color: white;
  position: absolute;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-radius: 10px;
  box-shadow: -1px 1px 3px 3px silver;

  div {
    width: 90%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

    h6 {
      font-size: smaller;
      margin-bottom: 0 0 10px 0;
      margin-block-start: 0;
      margin-block-end: 10px;
      color: rgb(38, 77, 38);

    }

    input {
      font-family: Arial, Helvetica, sans-serif;
      height: 30px;
    }
  }

  #div-description {
    width: 90%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

    h6 {
      font-size: smaller;
      margin-bottom: 0 0 10px 0;
      margin-block-start: 0;
      margin-block-end: 10px;
      color: rgb(38, 77, 38);

    }

    textarea {
      font-family: Arial, Helvetica, sans-serif;
      height: 80px;
    }
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
