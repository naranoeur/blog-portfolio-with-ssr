import React from 'react';
import styled from 'styled-components';
import Photo from './photos/Photo';
import Banner from './utilities/Banner';

const PhotosStyle = styled.div`
  .main {
    max-width: 600px;
    margin: 12px auto 20px auto;
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
  }
`;

const Photos = (props) => {
  const { photos, nextPageUrl, previousPageUrl } = props;
  const photosListJsx = photos.map((photo, i) => <Photo {...photo} key={i} />);
  return (
    <PhotosStyle>
      <Banner/>
      <div className="main">
        <div className="photosContainer">
          {photosListJsx}
        </div>
        <div className="pageNavigationUrls">
          {nextPageUrl && <a className="nextPageLink" href={nextPageUrl}>&larr; Next Page</a>}
          {previousPageUrl && <a className="previousPageLink" href={previousPageUrl}>Previous Page &rarr;</a>}
        </div>
      </div>
    </PhotosStyle>
  );
};

export default Photos;
