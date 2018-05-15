import React, { Component } from 'react';

class ThemeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isDarkTheme: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isDarkTheme: !prevState.isDarkTheme
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isDarkTheme ? 'Dark' : 'Light'}
        </button>
      );
    }
  }

  export default ThemeButton;