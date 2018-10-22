import React from 'react';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  text-align: center;
  line-height: 21px;
  font-size: 16px;
  .mainPhoto {
    display: block;
    margin: 10px auto;
    max-width: 100%;
  }
  .location, .description, .photoNavidation {
    max-width: 600px;
    margin: 0 auto;
  }
  .location {
    margin-bottom: 5px;
  }
  .description {
    margin-bottom: 10px;
  }
  .photoNavidation {
    text-align: left;
    padding-bottom: 20px;
    a {
      display: inline-block;
    }
    .previousPhoto {
      float: right;
    }
  }
`;

const Photo = (props) => {
  const {
    nextPhotoUrl,
    previousPhotoUrl,
    photoUrl,
    description,
    altTag,
    location,
  } = props;
  return (
    <PhotoStyle>
      <img className="mainPhoto" src={photoUrl} alt={altTag}/>
      <div className="location">{location}</div>
      <div className="description">{description}</div>
      <div className="photoNavidation">
        { nextPhotoUrl && <a href={nextPhotoUrl} className="nextPhoto">&larr; Next Photo</a>}
        { previousPhotoUrl && <a href={previousPhotoUrl} className="previousPhoto">Previous Photo &rarr;</a>}
      </div>
    </PhotoStyle>
  );
}

export default Photo;
