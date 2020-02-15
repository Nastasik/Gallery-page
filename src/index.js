import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './page.json';
import './index.css';
import ExternalProvider from './components/ExternalProvider';

ReactDOM.render(
  <ExternalProvider data={data}>
    <App data={data}/>
  </ExternalProvider>,
  document.getElementById('root')
);
