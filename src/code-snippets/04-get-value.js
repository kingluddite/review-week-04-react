// get value
import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customerId: '',
    }
  }

  handleInputChange = (e) => {
    // we use short "e" as it's less typing and common (also evt is common)
    // because our target is the field we can directly access value (before are target was form element which did not have a value property)
    console.log(e.target.value) // will out put value typed in form field
  }

  render() {
    return (
      <div>
        <h2>Native Form</h2>
        {/* add our event handler here */}
        <form>
          <input
            type='text'
            label='cusomer id'
            id='customer-id'
            name='customer-id'
            onChange={this.handleInputChange}
            value={this.state.customerId}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ControlledForm
