import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from '../components/Blogs';

const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrate(
  <Blogs {...initialData} />,
  document.getElementById('app')
);
