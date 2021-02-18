import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import WidgetMeteo from './components/WidgetMeteo';

ReactDOM.render(
  <React.StrictMode>
    <WidgetMeteo />
  </React.StrictMode>,
  document.getElementById('root')
);
