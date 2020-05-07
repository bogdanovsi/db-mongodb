import React, { Component } from 'react';
import MongoInput from './components/MongoInput';

export default class App extends Component {
   render() {
      return (
         <>
            <MongoInput route={'book'} />
            <MongoInput route={'writers'} />
         </>
      );
   }
}