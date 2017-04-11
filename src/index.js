import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import 'styles/app.css';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <div className='app'> {/* обернули все в .app */}
      <App />
    </div>
  </Provider>,

document.getElementById('root'),
);
