import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import MongoInput from './MongoInput';
import Menu from './Menu';
import Home from './pages/Home';
import Books from './pages/Books';

const styles = {
   container: {
      maxWidth: '60vw'
   }
}

export default class App extends Component {
   render() {
      return (
         <>
            <div className="container" style={{padding: '24px', display: 'flex'}} >
               <div style={{width: '10vw'}}>
                  <Menu/>
               </div>
               <div style={{width: '90vw'}}>
                  <Router history={history}>
                     <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/books" component={Books} />
                     </Switch>
                  </Router>
               </div>
            </div>
         </>
      );
   }
}