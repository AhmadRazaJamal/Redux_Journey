import React, { Component } from 'react';
import withLevel from './rentalLevels';

const WithLevel = withLevel('bronze');
class App2 extends React.Component {
    render() {
      return (
        <WithLevel
            amount = {"$45"}
            level={'bronze'}
        />
      );
    }
  }
  export default App2;