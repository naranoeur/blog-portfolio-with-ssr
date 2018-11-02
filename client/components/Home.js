import React from 'react';
import styled from 'styled-components';
import Banner from './utilities/Banner';

const HomeStyle = styled.div`
  .main {
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    min-height: 500px;
    margin: 10px auto 10px auto;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    .socialLink {
      display: block;
      margin: 40px auto;
      width: 50px;
      height: 50px;
      &:hover {
        svg {
          fill: #6428a9;
        }
      }
      svg {
        fill: #4a738e;
        transition: fill 0.4s;
      }
    }
  }
`;

const InstagramSvg = () => (
  <svg viewBox="0 0 800 800">
    <path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z"/>
  </svg>
);

const Home = (props) => {
  return (
    <HomeStyle>
      <Banner />
      <div className="main">
        Coming soon...

        <a className="socialLink" href="https://www.instagram.com/naranoeur/">
          <InstagramSvg />
        </a>
      </div>
    </HomeStyle>
  );
};

export default Home;
