import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBox = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: 60px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 70%;
    height: 30px;
    margin-right: 15px;
  }

  button {
    height: 32px;
    background-color: blue;
    color: white;

  }
`;

export const AlbunsBox = styled.div`
  border: 1px solid red;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    align-self: center;
  }
`;

export const LoadingBox = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
