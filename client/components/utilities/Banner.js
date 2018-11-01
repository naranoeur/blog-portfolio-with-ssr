import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
  font-size: 16px;
  line-height: 60px;
  font-weight: 500;
  background-color: white;
  color: #525252;
  .navigation {
    max-width: 600px;
    margin: 0 auto;
    text-align: right;
    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
      margin-right: 20px;
      transition: color 0.3s;
      &:hover {
        text-decoration: underline;
        color: black;
      }
    }
  }
`;

const Banner = () => {
  return (
    <BannerStyle>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/photos">Photos</a>
        <a href="/blog">Blog</a>
      </div>
    </BannerStyle>
  );
}

export default Banner;
