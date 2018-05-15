import React from 'react';
import logo from './logo.svg';
import './App-Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>          
        </header>
      </div>
    );
  }
}


export default Header;