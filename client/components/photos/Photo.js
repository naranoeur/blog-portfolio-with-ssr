import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
  .description {
    margin-bottom: 15px;
  }
  .mainPhotoContainer {
    margin: 0 auto 10px auto;
    .mainPhoto {
      display: block;
      max-width: 100%;
    }
    .placeholder {
      width: 100%;
      height: 600px;
      background-color: #f0f0f0;
    }
  }
`;

const App = (props) => {
  const { photoUrl, altTag, description, location } = props;
  return (
    <PhotoStyle>
      <div className="mainPhotoContainer">
        <LazyLoad placeholder={<div className="placeholder"/>}>
          <img className="mainPhoto" src={photoUrl} alt={altTag}/>
        </LazyLoad>
      </div>
      { location && <div className="location"><span>Location: </span>{location}</div>}
      <div className="description">{description}</div>
    </PhotoStyle>
  );
};

export default App;
