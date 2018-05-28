import React from 'react';
import './Dropdown-selector.css';

class DropdownSelector extends React.Component {
    constructor(props){
    super(props);
    this.getOptions = this.getOptions.bind(this);
    this.title = this.props.title;
    this.options = this.props.options;
    }

    getOptions() {
        let listOptions = this.options.map((option, index) => <option key={index} value={option}>{option}</option>);
        return listOptions;
    }

    render(title) {
        return(
            <div className='form-payment'>
                <label>
                  {this.title}
                  <select className='form-selector' type="text">
                    {this.getOptions()}                  
                  </select>
                </label>
              </div>
        );
    }
}

export default DropdownSelector;