import styled from 'styled-components';

export const Container = styled.main`
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

export const LoadingBox = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyBox = styled.h1`
  position: relative;
  top: 100px;
  color: rgb(38, 77, 38);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlbunsBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: rgb(38, 77, 38);
  }

  #div-albuns {
    width: 100%;
    display: flex;
    gap: 40px;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  #div-cards {
    width: 100%;
    border: 2px solid silver;
    overflow-y: hidden;
    color: rgb(38, 77, 38);
    text-decoration: none;

    img {
      width: 230px;
      height: 230px;
    }

    h4, h5 {
      padding: 5%;
    }
  }
`;
