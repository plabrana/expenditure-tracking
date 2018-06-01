import React from 'react'
import DropdownSelector from './Dropdown-selector'
import InputField from './Input-field'
import './New-purchase-form.css'
import { categories } from './Firebase'
import { paymentMethod } from './Firebase'
import { cards } from './Firebase'
 
class PurchaseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        categories: [''],
        paymentMethod: [''],
        cards: ['']
      };
      this.showCards = this.showCards.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {

      categories.on('value', snap => {
        this.setState({categories: snap.val()})
      });

      paymentMethod.on('value', snap => {
        this.setState({paymentMethod: snap.val()})
      });

      cards.on('value', snap => {
        this.setState({cards: snap.val()})
      })
    }
  
    handleSubmit(event) {
      console.log('A product was submitted: ' + this.state.valueItem + ' ' + this.state.valuePrice);
      event.preventDefault();
    }

    showCards() {
      return (
        <div>
          <DropdownSelector title="fafa" placeholder="jajaj" />
          <DropdownSelector title="fafa2" placeholder="jajaj2" />
          {console.log('test')}
        </div>
      )
    }
  
    render() {

      return (
        <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='form'>
              <InputField className="form-item-input" type='text' title="Item" />
              <InputField className="form-price-input" type='number' title="Price" />
              <DropdownSelector placeholder="Choose a payment method" title="Payment Method" options={this.state.paymentMethod} />
                {this.state.paymentMethod.value === "Credito" ? this.showCards() : null}
              <DropdownSelector placeholder="Choose a category" title="Category" options={this.state.categories} />
              <input className='form-submit' type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  export default PurchaseForm;