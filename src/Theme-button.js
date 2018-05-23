import React from 'react';
import './Theme-button.css';

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
        <div className="theme-button">
          <button className={this.state.isDarkTheme ? "theme-dark" : "theme-light"} onClick={this.handleClick}>
            {this.state.isDarkTheme ? 'Dark' : 'Light'}
          </button>
        </div>
      );
    }
  }

  export default ThemeButton;