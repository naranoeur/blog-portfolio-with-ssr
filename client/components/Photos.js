import React from 'react';
import styled from 'styled-components';
import Photo from './photos/Photo';

const PhotosStyle = styled.div`
  max-width: 600px;
  margin: 20px auto;
  .pageNavigationUrls {
    margin: 10px 0;
    a {
      display: inline-block;
      color: inherit;
    }
    .previousPageLink {
      float: right;
    }
  }
`;

const Photos = (props) => {
  const { photos, nextPageUrl, previousPageUrl } = props;
  const photosListJsx = photos.map((photo, i) => <Photo {...photo} key={i} />);
  return (
    <PhotosStyle>
      <div className="photosContainer">
        {photosListJsx}
      </div>
      <div className="pageNavigationUrls">
        {nextPageUrl && <a className="nextPageLink" href={nextPageUrl}>&larr; Next Page</a>}
        {previousPageUrl && <a className="previousPageLink" href={previousPageUrl}>Previous Page &rarr;</a>}
      </div>
    </PhotosStyle>
  );
};

export default Photos;
