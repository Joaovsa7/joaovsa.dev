import React from 'react';
import ReactDOM from 'react-dom';
import './sass/components.scss';
import GithubApp from './src/GithubApp';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter> <GithubApp /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
