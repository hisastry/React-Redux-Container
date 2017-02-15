import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';

import {createStore} from 'redux'
import reducer from 'reducers/index.js'

let store = createStore(reducer);

ReactDOM.render(<App store={store}/>, document.querySelector('#app'));