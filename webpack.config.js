const webpack = require('webpack');
const path = require('path');

const AssetsPlugin = require('assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [  {
    mode: 'production',
    entry: {
      home: './client/serverRenderers/Home.js',
      photos: './client/serverRenderers/Photos.js',
      photo: './client/serverRenderers/Photo.js',
      blogs: './client/serverRenderers/Blogs.js',
      blog: './client/serverRenderers/Blog.js',
    },
    output: {
      filename: './[name].js',
      path: path.resolve(__dirname, 'dist', 'renderers'),
      libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-2' ]
          },
        }
      ]
    },
    stats: { colors: true },
    plugins: [],
  },
  {
    mode: 'production',
    entry: {
      photos: './client/clientScripts/Photos.js',
      blogs: './client/clientScripts/Blogs.js',
      blog: './client/clientScripts/Blog.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: './[name].[chunkhash].js',
        publicPath: process.env.ASSET_BASE_URL,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-2' ]
          },
        }
      ]
    },
    stats: { colors: true },
    plugins: [
      new AssetsPlugin({
        fullPath: false,
        filename: "assets.json"
      })
    ]
  }
]
