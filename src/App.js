import React from 'react';
import Header from './App-Header';
import Body from './App-Body';
import Clock from './Clock';
import ThemeButton from './Theme-button';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="theme-button">
         <ThemeButton />
        </div>
        <div className="clock">
         <Clock />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>
    );
  }
}


export default App;
