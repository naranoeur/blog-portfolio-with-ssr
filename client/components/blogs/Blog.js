import React from 'react';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';

const BlogStyle = styled.div`
  position: relative
  padding: 10px 0;
  background-color: white;
  border-radius: 2px;
  line-height: 21px;
  margin-bottom: 10px;
  .title {
    margin: 0 10px 10px 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .description {
    margin: 0 10px 15px 10px;
  }
  .blogLink {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    position: absolute;
    z-index: 10;
  }
  .photoContainer {
    margin: 0 auto 14px auto;
    overflow: hidden;
    display: block;
    position: relative;
    height: 400px;
    .photo {
      display: block;
      max-width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
    .LazyLoad {
      height: 400px;
      background-color: #f0f0f0;
    }
  }
`;

class Blog extends React.Component {
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
    const { blogUrl, photoUrl, title, description } = this.props;
    return (
      <BlogStyle imageFinishedLoading={imageFinishedLoading}>
        <div className="photoContainer">
          <LazyLoad debounce={false} offset={600}>
            <img
              className="photo"
              src={photoUrl}
              alt={title}
              onLoad={this.handleImageFinishedLoading}
            />
          </LazyLoad>
        </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <a href={blogUrl} className="blogLink" />
      </BlogStyle>
    );
  }
}

export default Blog;
