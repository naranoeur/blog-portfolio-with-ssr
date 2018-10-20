import React from 'react';
import styled from 'styled-components';
import Photo from './photos/Photo';

const PhotosStyle = styled.div`
  max-width: 550px;
  margin: 20px auto;
  background-color: white;
  border-radius: 4px;
  padding: 10px 25px;
`;

const Photos = (props) => {
  const { photos } = props;
  const photosListJsx = photos.map(photo => <Photo {...photo} />);
  return (
    <PhotosStyle>
      {photosListJsx}
    </PhotosStyle>
  );
};

export default Photos;
