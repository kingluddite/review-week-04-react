// TWO
// binding and this
// type but we don't see anything being entered into form field
import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customerId: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange() {
    console.log('hello')
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
