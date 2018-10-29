import React from 'react';
import ReactDOM from 'react-dom';
import Blog from '../components/Blog';

const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrate(
  <Blog {...initialData} />,
  document.getElementById('app')
);
