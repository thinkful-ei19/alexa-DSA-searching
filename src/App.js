import React, { Component } from 'react'
import Form from './components/linear';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Searching and Tree Traversal Drills</h1>
        </header>

        <main>
          <Form />
       </main>
      </div>
    );
  }
}


