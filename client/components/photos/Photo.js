import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  padding: 10px 0;
  background-color: white;
  border-radius: 2px;
  line-height: 21px;
  margin-bottom: 10px;
  .location {
    margin: 0 10px 5px 10px;
  }
  .description {
    margin: 0 10px 15px 10px;
  }
  .mainPhotoContainer {
    margin: 0 auto 10px auto;
    overflow: hidden;
    display: block;
    position: relative;
    .mainPhoto {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
    .LazyLoad {
      height: ${props => props.imageFinishedLoading ? "auto" : "600px"};
      background-color: #f0f0f0;
    }
    .photoLink {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: block;
      position: absolute;
      z-index: 10;
    }
  }
`;

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFinishedLoading: false,
    };
    this.handleImageFinishedLoading = this.handleImageFinishedLoading.bind(this);
  }
  handleImageFinishedLoading () {
    window.setTimeout(() => {
      this.setState({ imageFinishedLoading: true });
    }, 100);
  }
  render() {
    const { imageFinishedLoading } = this.state;
    const { photoUrl, photoSrcUrl, altTag, description, location } = this.props;
    return (
      <PhotoStyle imageFinishedLoading={imageFinishedLoading}>
        <div className="mainPhotoContainer">
          <LazyLoad debounce={false} offset={600}>
            <img
              className="mainPhoto"
              src={photoSrcUrl}
              alt={altTag}
              onLoad={this.handleImageFinishedLoading}
            />
          </LazyLoad>
          <a href={photoUrl} className="photoLink" />
        </div>
        { location && <div className="location"><span>Location: </span>{location}</div>}
        <div className="description">{description}</div>
      </PhotoStyle>
    );
  }
}

export default Photo;
