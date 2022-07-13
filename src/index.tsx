import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { singletonApp } from './services/App/App';


ReactDOM.render(
  <React.StrictMode>
    {React.createElement(singletonApp.view.getComponent())}
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
