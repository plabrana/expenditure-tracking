import React from 'react';
import './Dropdown-selector.css';

class DropdownSelector extends React.Component {
<<<<<<< HEAD
=======
    /*constructor(props){
        super(props);
    }*/
>>>>>>> 91caafc9495afb83db71010b5f990e504885c512

    renderOptions() {
        let { options } = this.props;
        return options.map((option, index) => <option key={index} value={option}>{option}</option>);
    }

    render(title) {
        return(
            <div className='form-payment'>
                <label>
                  {this.props.title}
                  <select defaultValue={this.props.placeholder} className='form-selector' type="text">
<<<<<<< HEAD
                    <option disabled defaultValue="">{this.props.placeholder}</option>
=======
                    <option disabled>{this.props.placeholder}</option>
>>>>>>> 91caafc9495afb83db71010b5f990e504885c512
                    {this.renderOptions()}                  
                  </select>
                </label>
              </div>
        );
    }
}

export default DropdownSelector;