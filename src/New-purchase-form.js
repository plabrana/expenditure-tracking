import React from 'react';
import DropdownSelector from './Dropdown-selector';
import './New-purchase-form.css';

class PurchaseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueItem: ' ',
        valuePrice: ' ',
        //valuePaymentMethod: ' ',
        valueCategory: ' '
      };
  
      this.handleItemChange = this.handleItemChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      //this.handlePaymentMethodChange = this.handlePaymentMethodChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleItemChange(event) {
      this.setState({
        valueItem: event.target.value
      });
    }

    handlePriceChange(event) {
      this.setState({
        valuePrice: event.target.value
      });
    }

    handleCategoryChange(event) {
      this.setState({
        valueCategory: event.target.value
      });
    }

    /*handlePaymentMethodChange(event) {
      this.setState({
        valuePaymentMethod: event.target.value
      });
    }*/
  
    handleSubmit(event) {
      console.log('A product was submitted: ' + this.state.valueItem + ' ' + this.state.valuePrice + ' ' + this.state.valueCategory);
      event.preventDefault();
    }
  
    render() {
      let paymentOptions = ['','Efectivo', 'Debito', 'Credito']
      return (
        <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='form'>
              <div className='form-item'>
                <label>
                  Item 
                  <input className='form-item-input' type="text" value={this.state.valueItem} onChange={this.handleItemChange} />
                </label>
              </div>
              <div className='form-price'>
                <label>
                  Price
                  <input className='form-price-input' type="number" value={this.state.valuePrice} onChange={this.handlePriceChange} />
                </label>
              </div>
              <DropdownSelector title="Payment Method" options = {paymentOptions} />
              <div className='form-category'>
                <label>
                  Category
                  <select className='form-category-selector' type="text" value={this.state.valueCategory} onChange={this.handleCategoryChange}>
                    <option value=""></option>
                    <option value="Falopa">Falopa</option>
                    <option value="Faloaa">Falopa</option>
                    <option value="Falopa">Falopa</option>
                    <option value="Falopa">Falopa</option>
                    <option value="Falopa">Falopa</option>
                    <option value="Falopa">Falopa</option>
                    <option value="Falopa">Falopa</option>
                  </select>
                </label>
              </div>
                  <input className='form-submit' type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  export default PurchaseForm;