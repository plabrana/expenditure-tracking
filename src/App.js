import React from 'react';
import Header from './App-Header';
import Body from './App-Body';
import Clock from './Clock';
import ThemeButton from './Theme-button';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeButton />
        <Clock />
        <Header />
        <Body />
      </div>
    );
  }
}


export default App;
