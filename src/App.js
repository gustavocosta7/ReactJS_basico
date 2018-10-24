import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes'


import '../src/styles.css';
//stateless component
const App = () => (

    <div className="App">
      <Header />
      <Routes />
    </div>

);


export default App;
