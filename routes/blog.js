const express = require('express');
const Blog = require('../models/blog');
const blogsRenderer = require('../dist/renderers/blogs.js');
const blogRenderer = require('../dist/renderers/blog.js');
const formatBlogsData = require('../behaviors/blogs.js');
const formatBlogData = require('../behaviors/blog.js');

const router = express.Router();

router.get('/', (req, res) => {
  const { query } = req;
  const blogQuery = {};
  const blogLimit = Number(process.env.BLOG_LIMIT);
  if (query.page && Number(query.page)) {
    const lastBlog = Number(process.env.LAST_BLOG);
    const pageNumber = Number(query.page);
    const startingBlog = lastBlog - blogLimit * (pageNumber - 1) + 1;
    blogQuery.order = { $lt: startingBlog };
  }
  Blog.find(blogQuery).sort({ order: -1 }).limit( blogLimit )
    .then(blogRawData => {
      req.rawData = { blogs: blogRawData };
      const data = formatBlogsData(req);
      res.send(blogsRenderer(data));
    })
    .catch((err) => {
      console.log(err);
      res.send("500 error")
    });
});

 router.get('/:blogName', (req, res) => {
   const blogName = req.params.blogName;
   const blogOrder = Number(blogName.match(/^\d+/)[0]);
    Blog.findOne({ order: blogOrder})
      .then(blogRawData => {
        req.rawData = {
          blog: blogRawData,
          blogOrder
        };
        const data = formatBlogData(req);
        res.send(blogRenderer(data));
      })
      .catch((err) => {
        console.log(err);
        res.send("500 error")
      });
 });

module.exports = router;
