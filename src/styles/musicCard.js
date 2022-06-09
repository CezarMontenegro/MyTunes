import styled from 'styled-components';

const SongBox = styled.div`
  border-top: 2px solid silver;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  div {
    width: 50%;
    display: flex;
    justify-content: center;
    color: rgb(38, 77, 38);
    font-weight: bolder;
  }
`;

export default SongBox;
