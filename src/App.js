import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';

import '../src/styles.css';
//stateless component
const App = () => (

    <div className="App">
      <Header />
      <Main />
    </div>

);


export default App;
