import React from 'react';
import styled from 'styled-components';
import Banner from './utilities/Banner';

const HomeStyle = styled.div`
  .main {
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin: 50px auto 0 auto;
  }
`;

const Home = (props) => {
  return (
    <HomeStyle>
      <Banner />
      <div className="main">
        Coming soon...
      </div>
    </HomeStyle>
  );
};

export default Home;
