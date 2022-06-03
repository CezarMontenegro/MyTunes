import styled from 'styled-components';

const Container = styled.header`
  #div-user {
    padding: 0 50px;
    height: 60px;
    background-color: rgb(33, 40, 33);
    box-shadow: 2px 2px 2px 2px rgb(33, 40, 33);
    color: white;
    font-weight: bolder;
    font-size: xx-large;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #span-user {
      background-color: white;
      color: rgb(11, 65, 33);
      font-weight: 600;
      font-size: large;
      width: 200px;
      height: 30px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  #div-links {
    height: 60px;
    display: flex;
    justify-content: space-around;

    .links {
      width: 33.333%;
      background-color: rgb(11, 65, 33);
      box-shadow: 2px 2px 2px 2px rgb(11, 65, 33);
      color: silver;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .actual-link {
      width: 33.333%;
      background-color: silver;
      box-shadow: 2px 2px 2px 2px silver;
      color: rgb(11, 65, 33);
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

`;

export default Container;
