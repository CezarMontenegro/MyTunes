import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  color: rgb(38, 77, 38);

`;

export const Card = styled.div`
  position: absolute;
  top: 250px;
  width: 25%;

  #div-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a:-webkit-any-link {
      color: -webkit-link;
      cursor: pointer;
      text-decoration: none;
      border: 1px solid blue;
      box-sizing: content-box;
      padding: 1px 4px;
      font-size: smaller;
    }


  }

  h4 {
    margin-bottom: 5px;
    font-weight: bolder;
  }

  p {
    margin-top: 0px;
  }

  p:last-child {
    height: 100px;
    display: flex;
    flex-direction: wrap;
  }
`;

export const LoadingBox = styled.div`
  position: relative;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
