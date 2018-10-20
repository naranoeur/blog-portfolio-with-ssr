const webpack = require('webpack');
const path = require('path');

// const AssetsPlugin = require('assets-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

module.exports = [  {
    mode: 'development',
    entry: {
      home: './client/serverRenderers/Home.js',
      photos: './client/serverRenderers/Photos.js'
    },
    output: {
      filename: './[name].js',
      path: path.resolve(__dirname, 'renderers'),
      libraryTarget: 'commonjs2',
      hotUpdateChunkFilename: './hot-update.js',
      hotUpdateMainFilename: './hot-update.json'
    },
    target: 'node',
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
      new webpack.HotModuleReplacementPlugin(),
      // new AssetsPlugin({
      //   fullPath: false,
      //   filename: "assets.json"
      // })
    ]
  },
  // {
  //   mode: 'development',
  //   entry: [
  //     './client/Home.js'
  //   ],
  //   output: {
  //     filename: './[name].js',
  //     path: path.resolve(__dirname, 'renderers'),
  //     libraryTarget: 'commonjs2',
  //     hotUpdateChunkFilename: '/hot-update.js',
  //     hotUpdateMainFilename: '/hot-update.json'
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         loader:'babel-loader',
  //         options: {
  //           presets: [ 'env', 'react', 'stage-2' ]
  //         },
  //       }
  //     ]
  //   },
  //   stats: { colors: true },
  //   plugins: [
  //     new webpack.HotModuleReplacementPlugin(),
  //     // new AssetsPlugin({
  //     //   fullPath: false,
  //     //   filename: "assets.json"
  //     // })
  //   ]
  // }
]
