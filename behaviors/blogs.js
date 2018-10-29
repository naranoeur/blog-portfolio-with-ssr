const blogsTransformers = require('./transformers/blogsTransformers');

const {
  buildBlogUrl,
  buildJsAssetUrl,
} = blogsTransformers;


module.exports = (req) => {
  const { rawData } = req;
  const { blogs } = rawData;
  return {
    clientJsUrl: buildJsAssetUrl(),
    blogs: blogs.map(blog => {
      return {
        photoUrl: `${process.env.PHOTOGRAPHS_URL}/${blog.photoName}`,
        blogUrl: buildBlogUrl(blog),
        title: blog.title,
        description: blog.description,
        location: blog.location,
        date: blog.date,
      };
    }),
  };
}
