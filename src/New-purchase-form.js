import React from 'react';
import DropdownSelector from './Dropdown-selector';
import './New-purchase-form.css';
import { categories } from './Firebase';
import { paymentMethod } from './Firebase';
 
class PurchaseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueItem: ' ',
        valuePrice: ' ',
        categories: [''],
        paymentMethod: ['']
      };

  
      this.handleItemChange = this.handleItemChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      const categoriesRef = categories;
      const paymentMethodRef = paymentMethod;

      categories.on('value', snap => {
        this.setState({categories: snap.val()});
      });

      paymentMethod.on('value', snap => {
        this.setState({paymentMethod: snap.val()});
      });
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
  
    handleSubmit(event) {
      console.log('A product was submitted: ' + this.state.valueItem + ' ' + this.state.valuePrice);
      event.preventDefault();
    }
  
    render() {

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
              <DropdownSelector placeholder="Choose a payment method" title="Payment Method" options={this.state.paymentMethod} />
              <DropdownSelector placeholder="Choose a category" title="Category" options={this.state.categories} />
              <input className='form-submit' type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  export default PurchaseForm;