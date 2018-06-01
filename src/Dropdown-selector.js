import React from 'react';
import './Dropdown-selector.css';

class DropdownSelector extends React.Component {

    renderOptions() {
        let { options } = this.props;
        return options.map((option, index) => <option key={index} value={option}>{option}</option>);
    }

    render(title) {
        return(
            <div>
                <label>
                  {this.props.title}
                  <select defaultValue={this.props.placeholder} className='form-selector' type="text">
                    <option disabled defaultValue="">{this.props.placeholder}</option>
                    {this.renderOptions()}                  
                  </select>
                </label>
              </div>
        );
    }
}

export default DropdownSelector;