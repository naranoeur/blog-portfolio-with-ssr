import React from 'react';
import styled from 'styled-components';

const BlogStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 2px;
`;

const Blog = (props) => {
  const {
    blogHtml,
  } = props;
  return (
    <BlogStyle>
      <div dangerouslySetInnerHTML={{ __html: blogHtml }} />
    </BlogStyle>
  );
}

export default Blog;
