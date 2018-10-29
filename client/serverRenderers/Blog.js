import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import serialize from "serialize-javascript";
import Blog from '../components/Blog';
import googleAnalytics from './photos/googleAnalytics';

module.exports = (data) => {

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<Blog {...data} />);
  const appBody = ReactDOMServer.renderToString(jsx);
  const styleTags = sheet.getStyleTags();

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    ${googleAnalytics()}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blogs!</title>
    <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/8.16.0/lazyload.min.js"></script>
    ${styleTags}
    <style>
      body {
        font-size: 16px;
        background-color: #ebecf2;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;
        padding: 0;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div id="app">${appBody}</div>
    <script src="${data.clientJsUrl}" ></script>
    <script>
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy"
    });
    </script>
  </body>
  </html>
  `;
}
