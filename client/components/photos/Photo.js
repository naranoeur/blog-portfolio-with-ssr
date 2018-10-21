import React from 'react';
import LazyLoad from 'react-lazy-load';
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
    .LazyLoad {
      height: ${props => props.imageFinishedLoading ? "auto" : "600px"};
      background-color: #f0f0f0;
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
    const { photoUrl, altTag, description, location } = this.props;
    return (
      <PhotoStyle imageFinishedLoading={imageFinishedLoading}>
        <div className="mainPhotoContainer">
          <LazyLoad debounce={false}>
            <img
              className="mainPhoto"
              src={photoUrl}
              alt={altTag}
              onLoad={this.handleImageFinishedLoading}
            />
          </LazyLoad>
        </div>
        { location && <div className="location"><span>Location: </span>{location}</div>}
        <div className="description">{description}</div>
      </PhotoStyle>
    );
  }
}

export default Photo;
