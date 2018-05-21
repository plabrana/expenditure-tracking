import React from 'react';
import './Navigation-bar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/">New Purchase</a></li>
            <li><a href="http://localhost:3000/">Contact</a></li>
            <li><a href="http://localhost:3000/">About</a></li>
        </ul>
      </div>
    );
  }
}


export default NavigationBar;