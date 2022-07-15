import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { myContainer, TYPES } from './services/DiContainer/inversify.config'
import type { IApp } from './types/Interfaces/App';

const app = myContainer.get<IApp>(TYPES.App);
app.init();

ReactDOM.render(
  <React.StrictMode>
    {React.createElement(app.view.getComponent())}
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
