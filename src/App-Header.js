import React from 'react';
import './App-Header.css';

class Header extends React.Component {
  render() {
    return (
        <div className="app-header">
          <h1 className="appTitle">My Expenses</h1>          
        </div>
    );
  }
}


export default Header;