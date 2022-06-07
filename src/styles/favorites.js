import styled from 'styled-components';

const Main = styled.main`
  border: 1px solid red;
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
`;

export default Main;
