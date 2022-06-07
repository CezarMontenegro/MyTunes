import styled from 'styled-components';

export const PlayerBox = styled.main`
  display: flex;
  justify-content: center;
  gap: 100px;
  padding-top: 100px;
`;

export const AlbumBox = styled.div`
  color: rgb(38, 77, 38);

  img {
      width: 230px;
      height: 230px;
    }
`;

export const SongsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadingBox = styled.div`
  position: relative;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
