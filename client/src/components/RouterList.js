import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Contracts from './pages/Contracts';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Writers from './pages/Writers';

const RouterList = () => {
    return (
        <Switch>
            <Route exact path='/' component={Books}/>
            <Route path='/books' component={Books}/>
            <Route path='/contracts' component={Contracts}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/writers' component={Writers}/>
        </Switch>
    );
};

export default RouterList;