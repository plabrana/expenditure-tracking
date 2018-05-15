import React from 'react';
import AppHeader from './App-Header';
import Clock from './Clock';
import ThemeButton from './Theme-button';

class App extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Clock />
          </div>
          <div>
            <AppHeader />
          </div>
          <div>
            <ThemeButton />
          </div>
      </div>
    );
  }
}


export default App;
