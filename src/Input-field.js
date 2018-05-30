import React from 'react'
import './Input-field.css'

class InputField extends React.Component {
    render(title) {
        return(
            <div className='form-price'>
                <label>
                    {this.props.title}
                    <input className='form-input' type="number"/>
                </label>
            </div>
        )
    }
}

export default InputField