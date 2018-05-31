import React from 'react'
import './Input-field.css'

class InputField extends React.Component {
    render(title) {
        return(
            <div className='form-price'>
                <label>
                    {this.props.title}
                    <input type={this.props.type} className='form-input'/>
                </label>
            </div>
        )
    }
}

export default InputField