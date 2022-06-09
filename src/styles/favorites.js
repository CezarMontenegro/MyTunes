import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  color: rgb(38, 77, 38);
  align-items: center;

  .song-div {
    display: flex;
    justify-content: space-between;
    
    
    img {
      width: 60px;
      border-radius: 50%;
    }
  }

  #main-div {
    position: absolute;
    top: 200px;    
  }

  h1 {
    position: absolute;
    top: 350px;
  }
`;

export const LoadingBox = styled.div`
  position: relative;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
