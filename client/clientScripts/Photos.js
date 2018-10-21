import React from 'react';
import ReactDOM from 'react-dom';
import Photos from '../components/Photos';

const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrate(
  <Photos {...initialData} />,
  document.getElementById('app')
);
