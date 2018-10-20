import React from 'react';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
  .mainPhoto {
    display: block;
    max-width: 100%;
    margin: 0 auto 10px auto;
  }
  .description {
    margin-bottom: 15px;
  }
`;

const App = (props) => {
  const { photoUrl, altTag, description, location } = props;
  return (
    <PhotoStyle>
      <img className="mainPhoto" src={photoUrl} alt={altTag}/>
      { location && <p>{location}</p>}
      <div className="description">{description}</div>
    </PhotoStyle>
  );
};

export default App;
