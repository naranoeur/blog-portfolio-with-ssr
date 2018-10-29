import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  background-color: #454545;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .navigation {
    text-align: center;
    a {
      max-width: 100px;
      display: block;
      padding: 5px 10px 5px 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
      text-decoration: none;
      transition: padding 0.2s, color 0.5s;
      margin: 0 auto 30px auto;
      &:hover {
        padding: 6px 10px 4px 10px;
        color: #aac1ff;
        border: 1px solid #aac1ff;
      }
    }
  }
  .disclaimer {
    color: white;
    max-width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    .disclaimer {
      max-width: none;
    }
  }
`;

const Home = (props) => {
  return (
    <HomeStyle>
      <div className="navigation">
        <a href="/photos">Photos</a>
        <a href="/blog">Blog</a>
        <div className="disclaimer">
          The website has just been put up and is still under heavy development. And it obviously still needs a bit more style.
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
