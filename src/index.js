import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './views/Card';
import Header from './views/Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Card />, document.getElementById('root-body'));
ReactDOM.render(<Header />, document.getElementById('root-header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
