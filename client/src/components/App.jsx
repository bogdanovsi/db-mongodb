import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MongoInput from './MongoInput';
import Menu from './Menu';
import RouterList from './RouterList';

const styles = {
   container: {
      padding: '24px',
      height: '100vh',
      background: 'beige',
      display: 'flex'
   },
   main: {
      width: '100vw',
      height: '100vh',
      background: 'cornflowerblue'
   }
}

export default class App extends Component {
   render() {
      return (
         <>
            <div className="main" style={styles.main} >
               <div className="container" style={styles.container} >
                  <div style={{width: '10vw'}}>
                     <Menu/>
                  </div>
                  <div style={{width: '90vw'}}>
                     <RouterList />
                  </div>
               </div>
            </div>
         </>
      );
   }
}