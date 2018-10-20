// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import template from '../templates/home';
// import homeReducer from '../reducers/home';
// import HomeView from '../components/Home';
//
// module.exports = data => {
//   const { homeView, templateData, initialState } = data;
//   const store = createStore(
//     homeReducer,
//     initialState,
//     applyMiddleware(thunkMiddleware)
//   );
//   const content = ReactDOMServer.renderToString(
//     <Provider store={store}>
//       <HomeView {...homeView} />
//     </Provider>
//   );
//   return template(content, data);
// }


module.exports = () => {
  const appBody = "";
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>HELLO WORLD!</h1>
    <div id="app">${appBody}</div>
  </body>
  </html>
  `;
}
