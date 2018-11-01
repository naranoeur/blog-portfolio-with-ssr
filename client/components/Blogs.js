import React from 'react';
import styled from 'styled-components';
import Blog from './blogs/Blog';
import Banner from './utilities/Banner';

const BlogsStyle = styled.div`
  .main {
    max-width: 600px;
    margin: 20px auto;
    .pageNavigationUrls {
      margin: 10px 0;
      a {
        display: inline-block;
        color: inherit;
      }
      .previousPageLink {
        float: right;
      }
    }
  }
`;

const Blogs = (props) => {
  const { blogs, nextPageUrl, previousPageUrl } = props;
  const blogsListJsx = blogs.map((blog, i) => <Blog {...blog} key={i} />);
  return (
    <BlogsStyle>
      <Banner />
      <div className="main">
        <div className="blogsContainer">
          {blogsListJsx}
        </div>
        <div className="pageNavigationUrls">
          {nextPageUrl && <a className="nextPageLink" href={nextPageUrl}>&larr; Next Page</a>}
          {previousPageUrl && <a className="previousPageLink" href={previousPageUrl}>Previous Page &rarr;</a>}
        </div>
      </div>
    </BlogsStyle>
  );
};

export default Blogs;
