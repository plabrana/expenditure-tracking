import React from 'react';
import './App-Header.css';
import firebase from "firebase";

class Header extends React.Component {
  render() {
    return (
        <div className="app-header">
          <h1 className="appTitle">My Expenses</h1>          
        </div>
    );
  }
}

var dbRef = firebase.database().ref().child('title');
dbRef.on('value', snap => 'appTitle'.innerText = snap.val());


export default Header;