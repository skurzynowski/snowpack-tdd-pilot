import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import type { App } from './services/App/App';
import { myContainer, TYPES } from './services/DiContainer/inversify.config'

const app = myContainer.get<App>(TYPES.App);
app.init();

ReactDOM.render(
  <React.StrictMode>
    {React.createElement<{store: App['store']}>(app.view.getComponent(),{ store: app.store })}
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
