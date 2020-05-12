import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/index.less';

ReactDOM.render((
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
), document.getElementById('root'));