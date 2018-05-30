import React from 'react';
import DropdownSelector from './Dropdown-selector';
import InputField from './Input-field'
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
  
    handleSubmit(event) {
      console.log('A product was submitted: ' + this.state.valueItem + ' ' + this.state.valuePrice + ' ' + this.state.valueCategory);
      event.preventDefault();
    }
  
    render() {

      return (
        <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='form'>
              <InputField title="Item" />
              <InputField title="Price" />
              <DropdownSelector placeholder="Choose a payment method" title="Payment Method" options={this.state.paymentMethod} />
              <DropdownSelector placeholder="Choose a category" title="Category" options={this.state.categories} />
              <input className='form-submit' type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  export default PurchaseForm;