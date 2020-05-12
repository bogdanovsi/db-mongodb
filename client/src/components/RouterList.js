import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';

const RouterList = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/books' component={Books}/>
        </Switch>
    );
};

export default RouterList;