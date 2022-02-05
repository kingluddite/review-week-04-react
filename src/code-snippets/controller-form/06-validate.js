// validate
import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customerId: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      customerId: e.target.value,
    })
  }

  handleSubmit = (e) => {
    // disable default form submit behavior
    e.preventDefault()
    // show what the user added to state
    console.log(`The customer id is ${this.state.customerId}`)
  }

  isValid() {
    // check if field is empty
    if (this.state.customerId === '') {
      return false
    }

    // if we get here the field is not empty
    // so good to return
    return true
  }

  render() {
    return (
      <div>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            label='cusomer id'
            id='customer-id'
            name='customer-id'
            onChange={this.handleInputChange}
            value={this.state.customerId}
          />
          <button disabled={!this.isValid()} type='submit'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default ControlledForm
