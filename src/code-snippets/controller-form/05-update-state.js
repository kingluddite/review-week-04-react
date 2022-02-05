// update state
// but lots of work to do what we had before
// but next we'll add simple validation
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ControlledForm
