import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Mount function to start the app

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  );
};

// If we are running in development mode and in isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container and we should export the mount function

export { mount };