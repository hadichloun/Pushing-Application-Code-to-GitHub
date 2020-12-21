import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hadi Chloun portfolio</h1>
        <div>
       <div>{moment().format('MMM do YYYY, h:mm:ss a')}</div>
       </div>
      </div>
    );
  }
}
