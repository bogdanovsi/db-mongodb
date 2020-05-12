import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import MongoInput from './MongoInput';
import Menu from './Menu';
import RouterList from './RouterList';

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
                  <RouterList />
               </div>
            </div>
         </>
      );
   }
}