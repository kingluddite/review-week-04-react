// THREE
// better way then binding
// use arrow functions
// this is possible with how arrow functions deal with "this"
// MORE READING HERE ON BINDING VS Arrow functions in react - https://medium.com/@joespinelli_6190/using-arrow-functions-to-avoid-binding-this-in-react-5d7402eec64
// QUESTION: why can't we update our form field?
// because our state is always an empty string and we never update the state
import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customerId: '',
    }

    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = () => {
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
