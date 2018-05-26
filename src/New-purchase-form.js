import React from 'react';
import './New-purchase-form.css';

class PurchaseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='form'>
            <div className='form-item-label'>
                <label>
                    Item: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </div>
            <div className='form-price-label'>
                <label>
                    Price: 
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
            </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  export default PurchaseForm;