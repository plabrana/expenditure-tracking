import React from 'react';
import Header from './App-Header';
import Clock from './Clock';
import ThemeButton from './Theme-button';
import NavBar from './Navigation-bar';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ThemeButton />
        <Clock />
        <Header />
        <NavBar />
      </div>
    );
  }
}


export default App;
