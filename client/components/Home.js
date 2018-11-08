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
    .description {
      font-size: 20px;
      line-height: 29px;
      margin-bottom: 20px;
    }
    .socialBar {
      .socialLink {
        display: inline-blockblock;
        margin: 40px auto;
        width: 50px;
        height: 50px;
        margin-right: 15px;
        &:hover {
          svg {
            fill: #6428a9;
          }
        }
        svg {
          fill: #4a738e;
          transition: fill 0.4s;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

const InstagramSvg = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
  </svg>
);

const WordPressSvg = () => (
  <svg viewBox="0 0 36 36">
    <path d="M36.012,18.006c0,9.927-8.079,18.006-18.006,18.006S0,27.933,0,18.006S8.079,0,18.006,0S36.012,8.079,36.012,18.006z
     M35.188,18.006c0-9.465-7.717-17.182-17.182-17.182S0.824,8.541,0.824,18.006s7.717,17.182,17.182,17.182
    S35.188,27.471,35.188,18.006z M3.898,11.716l7.375,20.196C6.109,29.4,2.552,24.115,2.552,18.006
    C2.552,15.775,3.035,13.645,3.898,11.716z M27.25,22.226l-1.527,5.145l-5.586-16.599c0,0,0.924-0.061,1.768-0.161
    c0.824-0.1,0.724-1.326-0.1-1.266c-2.512,0.181-4.12,0.201-4.12,0.201s-1.507-0.02-4.06-0.201
    c-0.844-0.061-0.944,1.206-0.101,1.266c0.784,0.081,1.608,0.161,1.608,0.161l2.411,6.591l-3.376,10.128l-5.627-16.72
    c0,0,0.925-0.061,1.769-0.161c0.824-0.1,0.724-1.326-0.101-1.266c-2.492,0.181-4.12,0.201-4.12,0.201
    c-0.281,0-0.623-0.02-0.984-0.02c2.753-4.2,7.496-6.973,12.901-6.973c4.019,0,7.677,1.547,10.43,4.059c-0.06,0-0.141,0-0.201,0
    c-1.507,0-2.593,1.307-2.593,2.733c0,1.266,0.744,2.331,1.527,3.617c0.603,1.025,1.266,2.351,1.266,4.26
    C28.436,18.548,27.893,20.076,27.25,22.226z M23.03,32.354c0.02,0.08,0.061,0.161,0.101,0.221
    c-1.608,0.563-3.316,0.884-5.125,0.884c-1.507,0-2.974-0.221-4.361-0.643l4.622-13.464L23.03,32.354z M33.459,18.006
    c0,5.707-3.095,10.671-7.697,13.344l4.723-13.625c0.784-2.251,1.186-3.979,1.186-5.546c0-0.563-0.04-1.085-0.121-1.588
    C32.756,12.801,33.459,15.313,33.459,18.006z"/>
  </svg>

)

const Home = (props) => {
  return (
    <HomeStyle>
      <Banner />
      <div className="main">
        <div className="description">
          This is a universal javascript server-side rendered website, built using Node.js, Express.js, React.js, MongoDB, Nginx.
        </div>
        <div className="socialBar">
          <a className="socialLink" href="https://www.instagram.com/naranoeur/">
            <InstagramSvg />
          </a>
          <a className="socialLink" href="https://naranoeur.wordpress.com/">
            <WordPressSvg />
          </a>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
