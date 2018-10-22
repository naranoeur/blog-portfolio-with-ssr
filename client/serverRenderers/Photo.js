import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Photo from '../components/Photo';
import googleAnalytics from './photos/googleAnalytics';

module.exports = (data) => {

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<Photo {...data} />);
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
    <title>Photos!</title>
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
  </body>
  </html>
  `;
}
