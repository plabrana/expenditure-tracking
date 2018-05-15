import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="clock">
          <h3 className="app-header-clock">{this.state ? this.state.date.toLocaleTimeString() : "00:00:00"}</h3>
        </div>
      );
    }
  }

  export default Clock;