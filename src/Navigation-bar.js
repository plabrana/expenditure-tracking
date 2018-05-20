import React from 'react';
import './Navigation-bar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="newpurchase.html">New Purchase</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
      </div>
    );
  }
}


export default NavigationBar;