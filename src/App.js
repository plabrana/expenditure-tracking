import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './App-Header';
import Clock from './Clock';
import ThemeButton from './Theme-button';
import NavBar from './Navigation-bar';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div>
          <ThemeButton />
          <Clock />
          <Header />
          <NavBar />
        </div>
    );
  }
}


export default App;
